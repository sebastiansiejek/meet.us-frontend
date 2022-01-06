import Link from 'next/link';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import React from 'react';
import UserSettings from '../UserSettings';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { routes } from 'src/routes/routes';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';

const { Header } = Layout;

export interface NavbarProps {}

const NavbarStyled = styled(Header)`
  @media (max-width: 992px) {
    padding: 0 2rem;
  }

  .navbar__desktop-navigation {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .hamburger-react {
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const { t } = useTranslation();
  const session = useSession();
  const isLogged = !!session.data;
  const unLoggedMenu =
    !isLogged && Object.values(routes).filter((val) => val.display.unLogged);
  const loggedMenu =
    isLogged && Object.values(routes).filter((val) => val.display.logged);

  return (
    <NavbarStyled className="flex items-center">
      <div className="mr-auto">
        <Link href="/">
          <a>
            <div>
              <Logo />
            </div>
          </a>
        </Link>
      </div>
      {unLoggedMenu && unLoggedMenu.length > 0 && (
        <Menu
          className="flex navbar__desktop-navigation"
          theme="dark"
          mode="horizontal"
        >
          {unLoggedMenu.map(({ href, title, display }) => {
            const key = `${href}-${display}`;
            return (
              <Menu.Item key={key}>
                <Link href={href}>{t(title)}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      )}
      {loggedMenu && loggedMenu.length > 0 && (
        <Menu
          className="flex navbar__desktop-navigation"
          theme="dark"
          mode="horizontal"
        >
          {loggedMenu.map(({ href, title, display }) => {
            const key = `${href}-${display}`;
            return (
              <Menu.Item key={key}>
                <Link href={href}>{t(title)}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item
            key="settings"
            style={{ marginLeft: 'auto', padding: '0', display: 'flex' }}
          >
            <UserSettings />
          </Menu.Item>
        </Menu>
      )}
      <MobileMenu />
    </NavbarStyled>
  );
};

export default Navbar;
