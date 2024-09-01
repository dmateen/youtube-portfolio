import React from "react";
import { VideosList } from "./videosList";
import { formatNumberWithCommas } from "@/app/utils/utility";

const Portfolio = ({ data }) => {
  const cards = data?.map((item) => ({
    description:
      item.youtube_channel_name +
      " - " +
      formatNumberWithCommas(item.youtube_views) +
      " views",
    title: item.youtube_video_title,
    src:
      item.youtube_video_thumbnails?.medium?.url ||
      "https://your-default-thumbnail-url.jpg",
    ctaText: "Visit",
    ctaLink: item.youtube_link,
    content: (
      <p>
        {item.youtube_video_title} by {item?.youtube_channel_name} has garnered{" "}
        {formatNumberWithCommas(item.youtube_views)} views. Watch the video to
        explore more about the topic and enjoy the content produced by this
        channel. This video was published on{" "}
        {new Date(item.publishedAt).toLocaleDateString()}.
      </p>
    ),
  }));

  return (
    <div className="w-full h-full py-20 dark:bg-neutral-950 " id="our-work">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl ld:text-xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8 sm:text-5xl md:ml-4">
        Our Work in Action..
      </h2>
      <VideosList cards={cards?.slice(0, 10)} />
    </div>
  );
};

export default Portfolio;
