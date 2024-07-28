import TableSection from "@/components/ui/landingPage/tableSection";
import { formatNumber } from "@/utils/common";
import { api_url } from "@/utils/urls";
import { getYoutubeData } from "./api/getYoutubeData";

export default async function Page() {
  const response = await getYoutubeData();
  return <TableSection data={response} />;
}

export const metadata = {
  title: "Youtube Portfolio",
  description: "Youtube Portfolio website",
};
