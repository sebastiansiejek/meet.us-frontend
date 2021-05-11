import React from 'react';
import { Layout, Typography } from 'antd';
import { Menu } from 'antd';

const { Header } = Layout;

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const { Title } = Typography;

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Title
        level={2}
        style={{
          marginRight: 'auto',
        }}
      >
        <span
          style={{
            color: '#2A9D8F',
          }}
        >
          meet
        </span>
        <span
          style={{
            color: '#E9C46A',
          }}
        >
          .
        </span>
        <span
          style={{
            color: '#E76F51',
          }}
        >
          us
        </span>
      </Title>
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
