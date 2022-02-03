import Link from 'next/link';
import Logo from '../Logo';
import MenuLinks from './Menu';
import MobileMenu from '../MobileMenu';
import React from 'react';
import { Layout } from 'antd';
import { routes } from 'src/routes/routes';
import { useSession } from 'next-auth/react';
import useWindowScrollDirection from 'src/hooks/useWindowScrollDirection';
import clsx from 'clsx';

const { Header } = Layout;

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const session = useSession();
  const isLogged = !!session.data;
  const unLoggedMenu =
    !isLogged && Object.values(routes).filter((val) => val.display.unLogged);
  const loggedMenu =
    isLogged && Object.values(routes).filter((val) => val.display.logged);

  const { isScrollDown } = useWindowScrollDirection();

  return (
    <Header
      className={clsx('fixed top-0 z-40 w-full transition transform', {
        'translate-y-full': isScrollDown,
        '-translate-y-full': isScrollDown,
      })}
      style={{
        height: 'auto',
      }}
    >
      <div className="hidden lg:flex justify-between items-center">
        <div data-cy="navbar-logo">
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
        {loggedMenu && loggedMenu.length > 0 && (
          <MenuLinks links={loggedMenu} />
        )}
      </div>
      <div className="w-full lg:hidden">
        <MobileMenu />
      </div>
    </Header>
  );
};

export default Navbar;
