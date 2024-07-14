import { Table } from "antd";
import useOrdersTable, { orderColumns } from "./useOrderTable";

const OrdersTable = () => {
  const { orders, isError, isLoading, page, handleTableChange } =
    useOrdersTable();

  return (
    <div className="table_container">
      <Table
        style={{ width: "100%" }}
        columns={orderColumns}
        size="small"
        rowKey={(orders) => orders._id}
        dataSource={orders?.data || []}
        pagination={{ total: orders?.totalCount, current: page, pageSize: 20 }}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default OrdersTable;
