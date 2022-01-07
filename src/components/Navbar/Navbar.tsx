import Link from 'next/link';
import Logo from '../Logo';
import MenuLinks from './Menu';
import MobileMenu from '../MobileMenu';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { routes } from 'src/routes/routes';
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
  const session = useSession();
  const isLogged = !!session.data;
  const unLoggedMenu =
    !isLogged && Object.values(routes).filter((val) => val.display.unLogged);
  const loggedMenu =
    isLogged && Object.values(routes).filter((val) => val.display.logged);

  return (
    <NavbarStyled className="flex items-center justify-between">
      <div>
        <Link href="/">
          <a>
            <div>
              <Logo />
            </div>
          </a>
        </Link>
      </div>
      {unLoggedMenu && unLoggedMenu.length > 0 && (
        <MenuLinks links={unLoggedMenu} />
      )}
      {loggedMenu && loggedMenu.length > 0 && <MenuLinks links={loggedMenu} />}
      <MobileMenu />
    </NavbarStyled>
  );
};

export default Navbar;
