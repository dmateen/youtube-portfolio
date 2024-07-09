import {
  TableBody,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { FaExternalLinkAlt } from "react-icons/fa";
import { url } from "@/utils/urls";
import { formatNumber } from "@/utils/common";

async function getData() {
  try {
    const res = await fetch(`${url}/fetch-youtube-data`);
    console.log("==== url", url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
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
          {data.map((item, index) => (
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
