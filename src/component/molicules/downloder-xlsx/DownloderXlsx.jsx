import React from "react";
import { ExportSheet } from "react-xlsx-sheet";
import XLSX from "xlsx";

function DownloderXlsx() {
  const head = [
    { title: "排序", dataIndex: "sort" },
    { title: "母商品ID", dataIndex: "parentItemId" },
    { title: "子商品ID", dataIndex: "itemId" },
    { title: "商品名称", dataIndex: "itemName" },
    { title: "市场售价", dataIndex: "originPrice" },
    { title: "可售库存", dataIndex: "stock" },
    { title: "当前售价", dataIndex: "skuPrice" },
    { title: "商品状态", dataIndex: "itemStatus" },
    { title: "活动状态", dataIndex: "itemTopicStatus" },
  ];
  const data = [
    {
      activitySales: null,
      categoryId: null,
      id: "30",
      itemId: "228377",
      itemImgUrl:
        "http://image.seecsee.com/python/ec_crawler/1688/c93345294ffea88c27cb9e2add3c26d9.jpeg",
      itemName: "曲奇佰味葫芦蔓越莓曲奇200g巧克力零食抹茶手工烘焙饼干微商代发",
      itemStatus: 1,
      itemTopicStatus: 1,
      originPrice: 40000,
      parentItemId: 228209,
      skuPrice: 3039,
      sort: 111,
      stock: 40717,
      topicId: null,
      __typename: "CategoryCommodity",
    },
  ];
  return (
    <div>
      <ExportSheet
        header={head}
        fileName={`data`}
        dataSource={data}
        xlsx={XLSX}
      >
        <button>button</button>
      </ExportSheet>
    </div>
  );
}

export default DownloderXlsx;
