import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import Logo from '../Logo';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const { t } = useTranslation();

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
        <Menu.Item>
          <Link href="/join-to-us">{t('Join to us')}</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
