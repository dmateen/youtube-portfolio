import React, { useMemo } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { formatNumber } from "@/utils/common";
import ContentTable from "@/components/common/contentTable";

const columns = [
  { title: "Title", dataIndex: "title" },
  { title: "Channel Name", dataIndex: "channel_name" },
  { title: "Views", dataIndex: "views" },
  { title: "Link", dataIndex: "link" },
];

const TableSection = ({ data }) => {

  const tableData = data?.map((item, index) => ({
    key: index,
    title: item?.youtube_video_title,
    channel_name: item?.youtube_channel_name,
    views: formatNumber(item?.youtube_views),
    link: (
      <a href={item?.youtube_link} target="_blank" rel="noopener noreferrer">
        <FaExternalLinkAlt />
      </a>
    ),
  }));
  
  return <ContentTable columns={columns} tableData={tableData} />;
};

export default TableSection;
