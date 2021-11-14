import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { routes } from 'src/routes/routes';
import UserSettings from '../UserSettings';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import Logo from '../Logo';
import clsx from 'clsx';

export interface MobileMenuProps {}

const MobileMenuStyled = styled.div`
  @media (min-width: 992px) {
    display: none;
  }

  .navbar__mobile-navigation {
    transition: transform 0.3s;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background: #001529;
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
    transform: translateX(100%);

    &.is-open {
      transform: translateX(0);
    }

    > ul {
      max-height: 80%;
      overflow-y: auto;
      font-size: 2rem;

      > li {
        padding: 0;
      }
    }
  }

  .user-settings__toggled-icon {
    padding: 0;
  }
`;

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({}) => {
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <MobileMenuStyled>
      <Hamburger
        color="#2A9D8F"
        toggled={isOpen}
        toggle={() => setOpen(!isOpen)}
      />
      <div
        clsx={`navbar__mobile-navigation ${clsx({
          'is-open': isOpen,
        })}`}
      >
        <div clsx="flex items-center justify-between mb-8">
          <Logo />
          <Hamburger
            color="#2A9D8F"
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
          />
        </div>
        <Menu theme="dark" mode="vertical">
          {Object.values(routes).map(({ href, title, display }) => {
            const key = JSON.stringify({ href, display });
            return (
              <Menu.Item key={key} onClick={() => handleClick()}>
                <Link href={href}>{t(title)}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item
            key="settings"
            style={{ padding: '0', display: 'flex' }}
            onClick={() => handleClick()}
          >
            <UserSettings />
          </Menu.Item>
        </Menu>
      </div>
    </MobileMenuStyled>
  );
};

export default MobileMenu;
