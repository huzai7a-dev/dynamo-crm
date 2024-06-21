import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import useLayout from "./hooks/useLayout";
import ProfileCard from "./components/ProfileCard";

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const routesList: MenuItem[] = [
  {
    key: "/",
    label: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    key: "/orders",
    label: "Orders",
    icon: <UnorderedListOutlined />,
  },
];

const AppLayout = () => {
  const {
    profile,
    borderRadiusLG,
    collapsed,
    colorBgContainer,
    handleMenuClick,
    setCollapsed,
  } = useLayout();
  console.log(profile);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div>
          <h1 className="text-white text-2xl text-center">Logo</h1>
        </div>
        <Menu
          onClick={handleMenuClick}
          style={{ marginTop: "3rem" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={routesList}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex align="center" justify="space-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            {profile && <ProfileCard profile={profile} />}
          </Flex>
        </Header>
        <Content
          style={{
            margin: "16px 8px",
            padding: 8,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
