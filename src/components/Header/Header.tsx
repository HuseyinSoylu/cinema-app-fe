import React, { useState } from "react";
import { Menu, Button, Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav className="bg-black p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold md:text-xl">
            Cmaximum
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[]}
            className={`${
              menuVisible ? "block" : "hidden"
            } md:flex md:items-center text-black space-x-4`}
          >
            <Menu.Item key="films">Films</Menu.Item>
            <Menu.Item key="cinemas">Cinemas</Menu.Item>
            <Menu.Item key="campaigns">Campaigns</Menu.Item>
            <Menu.Item key="exclusive">Exclusive</Menu.Item>
          </Menu>

          <div className="flex items-center space-x-4">
            <Button type="text" className="text-white backdrop-blur-lg">
              Login
            </Button>
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="hidden md:block"
            />

            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleMenu}
              className="text-white text-xl md:hidden"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
