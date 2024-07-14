import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { GetProp, TableProps } from "antd";
import { Table, Tag } from "antd";
import type { SorterResult } from "antd/es/table/interface";

import { IOrder } from "src/types/httpResponse/order";
import { httpGetOrders } from "src/services/orders.service";

type ColumnsType<T> = TableProps<T>["columns"];

export const orderColumns: ColumnsType<IOrder> = [
  {
    title: "Order Name",
    dataIndex: "order_name",
  },
  {
    title: "Order Type",
    dataIndex: "order_type",
  },
  {
    title: "Number of colors",
    dataIndex: "number_of_colors",
  },
  {
    title: "gradient",
    dataIndex: "gradient",
    render: (text: boolean) => (text ? "yes" : "no"),
  },
  {
    title: "Additional Instruction",
    dataIndex: "additional_instruction",
    render: (text: string) => text || "N/A",
  },
  {
    title: "Rush",
    dataIndex: "rush",
    render: (text: boolean) => (text ? "yes" : "no"),
  },
  {
    title: "Paid",
    dataIndex: "bill_paid",
    render: (text: boolean) => (text ? "yes" : "no"),
  },
  {
    title: "Order Status",
    dataIndex: "status",
    //   render: (text: IOrder["status"]) => (
    //     <Tag
    //       color={
    //         text === "pending"
    //           ? "yellow"
    //           : text === "processing"
    //           ? "blue"
    //           : "green"
    //       }
    //     >
    //       {text.toUpperCase()}
    //     </Tag>
    //   ),
  },
];

const useOrdersTable = () => {
  const [page, setPage] = useState(1);
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", page],
    queryFn: () => httpGetOrders(page),
  });

  const handleTableChange: TableProps["onChange"] = (pagination) => {
    setPage(pagination.current || 1);
  };

  return { orders, isLoading, isError, page, handleTableChange };
};

export default useOrdersTable;
