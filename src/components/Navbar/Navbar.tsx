import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { paths } from 'src/data/paths';
import UserSettings from '../UserSettings';

const { Header } = Layout;

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <Header className="flex items-center">
      <div className="mr-auto">
        <Link href="/">
          <a>
            <div>
              <Logo />
            </div>
          </a>
        </Link>
      </div>
      <Menu className="flex" theme="dark" mode="horizontal">
        {paths.map(({ href, title }) => (
          <Menu.Item key={href}>
            <Link href={href}>{t(title)}</Link>
          </Menu.Item>
        ))}
        <Menu.Item
          style={{ marginLeft: 'auto', padding: '0', display: 'flex' }}
        >
          <UserSettings />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
