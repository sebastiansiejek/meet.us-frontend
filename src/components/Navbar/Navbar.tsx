import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
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
      <div
        style={{
          marginRight: 'auto',
        }}
      >
        <Link href="/">
          <a>
            <div>
              <Logo />
            </div>
          </a>
        </Link>
      </div>
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
        <Menu.Item>
          <Link href="/my-account">{t('My account')}</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
