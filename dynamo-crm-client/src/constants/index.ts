import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const routesList: MenuItem[] = [
  {
    key: "/",
    label: "Dashboard",
  },
  {
    key: "orders",
    label: "Orders",
    children: [
      {
        key: "/vector",
        label: "Vector",
      },
      {
        key: "/digitize",
        label: "Digitize",
      },
    ],
  },
];

export default routesList;
