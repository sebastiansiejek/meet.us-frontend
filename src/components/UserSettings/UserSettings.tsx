import Link from 'next/link';
import React from 'react';
import availableLanguages from 'src/data/availableLanguage';
import styled from 'styled-components';
import { Menu, Dropdown, notification } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { routes } from 'src/routes/routes';
import { signOut } from 'next-auth/react';

export interface UserSettingsProps {}

const UserSettingsStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;

  .anticon {
    margin: 0;

    path {
      fill: #fff;
    }
  }
`;

const UserSettings: React.FunctionComponent<UserSettingsProps> = ({}) => {
  const { i18n, t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <Dropdown
      overlay={
        <Menu selectable defaultSelectedKeys={[i18n.language]}>
          <Menu.Item key="my-account">
            <Link href={routes.myAccount.href}>{t('My account')}</Link>
          </Menu.Item>
          <Menu.ItemGroup title={t('Languages')}>
            {Object.keys(availableLanguages).map((key) => (
              <Menu.Item key={key}>
                <Link href={`${pathname}`} locale={key}>
                  {t(availableLanguages[key])}
                </Link>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
          <Menu.Item
            onClick={() => {
              signOut({ redirect: false });
              notification.open({
                message: t('You have been logged out'),
              });
            }}
            key="logout"
          >
            {t('Logout')}
          </Menu.Item>
        </Menu>
      }
    >
      <UserSettingsStyled className="user-settings__toggled-icon">
        <SettingFilled />
      </UserSettingsStyled>
    </Dropdown>
  );
};

export default UserSettings;
