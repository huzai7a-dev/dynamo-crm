import { MenuProps, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../store/authUser";

const useLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const profile = useProfileStore((store) => store.profile);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return {
    profile,
    collapsed,
    setCollapsed,
    colorBgContainer,
    borderRadiusLG,
    handleMenuClick,
  };
};

export default useLayout;
