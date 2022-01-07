import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import UserSettings from '../../UserSettings';
import Link from 'next/link';

export interface MenuLinksProps {
  links: Array<any>;
}

const MenuLinks: React.FunctionComponent<MenuLinksProps> = ({ links }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation();

  return (
    <Menu
      className="flex navbar__desktop-navigation flex-1 justify-end"
      theme="dark"
      mode="horizontal"
      selectedKeys={[pathname]}
    >
      {links.map(({ href, title }: any) => {
        return (
          <Menu.Item key={href}>
            <Link href={href}>{t(title)}</Link>
          </Menu.Item>
        );
      })}
      <Menu.Item key="settings" style={{ padding: '0', display: 'flex' }}>
        <UserSettings />
      </Menu.Item>
    </Menu>
  );
};

export default MenuLinks;
