import { api_url } from "@/utils/urls";

export async function getYoutubeData() {
  "use server";

  const apiUrl = `${api_url}/youtube-links-data`;
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      "Content-Type": "application/json",
      // "Cache-Control": "no-cache",
      // Pragma: "no-cache",
    },
    // cache: "no-store", // Ensure this option is properly applied
  });

  if (!res.ok) {
    console.error("Error fetching data", res.statusText);
    return null;
  }

  // Extract the JSON data from the response
  const data = await res.json();
  data?.data?.sort(
    (a, b) => b.attributes.youtube_views - a.attributes.youtube_views
  );

  const videoDetails = data?.data?.map((item) => {
    return { ...item?.attributes };
  });

  return videoDetails;
}
