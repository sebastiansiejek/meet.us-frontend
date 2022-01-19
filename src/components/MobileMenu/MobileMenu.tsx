import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { routes } from 'src/routes/routes';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import Logo from '../Logo';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import availableLanguages from 'src/data/availableLanguage';

export interface MobileMenuProps {}

const MobileMenuStyled = styled.div`
  .navbar__mobile-navigation {
    > ul {
      max-height: 80%;
      overflow-y: auto;

      > li {
        padding: 0;
      }
    }
  }

  .user-settings__toggled-icon {
    padding: 0;
  }

  .mobile-menu {
    max-height: 60vh;
  }
`;

const availableLanguagesKeys = Object.keys(availableLanguages);

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const handleClick = () => setOpen(false);
  const { pathname } = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (menuRef.current && menuHeight === 0) {
        setMenuHeight(menuRef.current.clientHeight);
      }
    }, 1);
  }, [menuHeight, menuRef]);

  return (
    <MobileMenuStyled>
      <div className={`navbar__mobile-navigation`}>
        <div className="flex items-center justify-between w-full">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <Hamburger
            color="#2A9D8F"
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
          />
        </div>
        <div
          className={clsx(
            'flex flex-col items-start overflow-y-auto transition-all ease-in-out',
            {
              'max-h-0': menuHeight > 0 && !isOpen,
            },
          )}
          style={{
            ...(menuHeight && isOpen && { maxHeight: menuHeight }),
          }}
          ref={menuRef}
        >
          <Menu theme="dark" mode="vertical" className="mobile-menu">
            {Object.values(routes).map(({ href, title, display }) => {
              const key = JSON.stringify({ href, display });
              return (
                <Menu.Item
                  key={key}
                  onClick={() => handleClick()}
                  className="text-3xl"
                  style={{
                    padding: '0',
                  }}
                >
                  <Link href={href}>{t(title)}</Link>
                </Menu.Item>
              );
            })}
            <div className="flex text-2xl">
              {availableLanguagesKeys.map((key, index) => (
                <div key={key} className="mt-6 mb-8">
                  <Link href={`${pathname}`} locale={key} passHref>
                    <a
                      style={{
                        color: i18n.language === key ? '#2A9D8F' : '#fff',
                      }}
                    >
                      {t(availableLanguages[key])}
                    </a>
                  </Link>
                  {index < availableLanguagesKeys.length - 1 && (
                    <span className="mx-4">/</span>
                  )}
                </div>
              ))}
            </div>
          </Menu>
        </div>
      </div>
    </MobileMenuStyled>
  );
};

export default MobileMenu;
