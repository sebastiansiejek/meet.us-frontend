import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import Logo from '../Logo';

const { Header } = Layout;

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Menu
        style={{
          display: 'flex',
        }}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item>Menu item</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
