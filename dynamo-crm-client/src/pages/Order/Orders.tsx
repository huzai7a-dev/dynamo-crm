import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Input } from "antd";
import { Link } from "react-router-dom";
import OrdersTable from "src/components/pages/orders/OrdersTable";

const Orders: React.FC = () => {
  return (
    <div style={{ height: "calc(100vh - 150px)" }}>
      <Flex
        style={{ padding: ".8rem .4rem" }}
        align="center"
        justify="space-evenly"
        gap={8}
      >
        <Input width={200} placeholder="Search..." />
        <Button type="primary" icon={<PlusOutlined />}>
          <Link to={"/create-order"}>Create Order</Link>
        </Button>
      </Flex>
      <OrdersTable />
    </div>
  );
};

export default Orders;
