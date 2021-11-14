import Link from 'next/link';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import React from 'react';
import UserSettings from '../UserSettings';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { routes } from 'src/routes/routes';
import { useLogin } from 'src/hooks/useLogin';
import { useTranslation } from 'react-i18next';

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
  const { isLogged } = useLogin();

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
      <Menu
        className="flex navbar__desktop-navigation"
        theme="dark"
        mode="horizontal"
      >
        {Object.values(routes).map(({ href, title, display }) => {
          const key = JSON.stringify({ href, display });
          return (
            <Menu.Item key={key}>
              {isLogged && display.logged && (
                <Link href={href}>{t(title)}</Link>
              )}
              {!isLogged && display.unLogged && (
                <Link href={href}>{t(title)}</Link>
              )}
            </Menu.Item>
          );
        })}
        {isLogged && (
          <Menu.Item
            key="settings"
            style={{ marginLeft: 'auto', padding: '0', display: 'flex' }}
          >
            <UserSettings />
          </Menu.Item>
        )}
      </Menu>
      <MobileMenu />
    </NavbarStyled>
  );
};

export default Navbar;
