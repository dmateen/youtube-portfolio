import { NextResponse } from "next/server";
import { google } from "googleapis";
import { youtubePortfolioLinks } from "./links";
import Cors from "cors";

const API_KEY = process.env.YOUTUBE_DEV;

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});

// Initialize the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*", // You can specify specific origins instead of '*'
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

async function getVideoDetails(videoId) {
  try {
    const response = await youtube.videos.list({
      part: "snippet,statistics",
      id: videoId,
    });
    const video = response.data.items[0];
    if (video) {
      const title = video.snippet.title;
      const channel = video.snippet.channelTitle;
      const views = video.statistics.viewCount;
      return { title, channel, views };
    }
  } catch (error) {
    console.error(`Error fetching video details: ${error}`);
  }
  return null;
}

export async function GET(req, res) {
  await runMiddleware(req, res, cors);

  try {
    const links = youtubePortfolioLinks;
    const videoData = [];

    for (const link of links) {
      let videoId;
      if (link.includes("youtu.be")) {
        videoId = link.split("youtu.be/")[1].split("?")[0];
      } else if (link.includes("youtube.com")) {
        videoId = link.split("v=")[1].split("&")[0];
      }
      const details = await getVideoDetails(videoId);
      if (details) {
        videoData.push({
          title: details.title,
          channel: details.channel,
          views: details.views,
          link: link,
        });
      }
    }

    videoData.sort((a, b) => b.views - a.views);
    return NextResponse.json(videoData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing links" },
      { status: 500 }
    );
  }
}
