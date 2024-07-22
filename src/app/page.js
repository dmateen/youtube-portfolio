import {
  TableBody,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { FaExternalLinkAlt } from "react-icons/fa";
import { formatNumber } from "@/utils/common";
import { api_url } from "@/utils/urls";

async function getData() {
  "use server";

  const apiUrl = `${api_url}/youtube-links?cache_bust=${new Date().getTime()}`;
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      // "Content-Type": "application/json",
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

  return data?.videoDetails;
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Channel Name</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.channel}</TableCell>
              <TableCell>{formatNumber(item.views)}</TableCell>
              <TableCell>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

export const metadata = {
  title: "Youtube Portfolio",
  description: "Youtube Portfolio website",
};
