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
import { fetchYoutubeData } from "./actions/fetchYoutubeData";

export default function Page({ data }) {
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

export const getServerSideProps = async () => {
  const data = await fetchYoutubeData();

  return {
    props: {
      data,
    },
  };
};

export const metadata = {
  title: "Youtube Portfolio",
  description: "Youtube Portfolio website",
};
