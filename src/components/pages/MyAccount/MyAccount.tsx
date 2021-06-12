import React from 'react';
import ActivateUser from 'src/components/ActivateUser';
import Container from 'src/components/Container';
import UserEvents from 'src/components/UserEvents';
import PageHeader from 'src/components/PageHeader';
import UserDataForm from 'src/components/User/UserDataForm';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import { ContactsTwoTone } from '@ant-design/icons';

export interface MyAccountProps {}

const MyAccount: React.FunctionComponent<MyAccountProps> = ({}) => {
  const { Panel } = Collapse;
  const { t } = useTranslation();

  return (
    <Container>
      <PageHeader title="My account" />
      <div className="mb-8">
        <Collapse>
          <Panel
            header={
              <div className="flex items-center">
                <ContactsTwoTone className="mr-2" />
                {t('Personal data')}
              </div>
            }
            key="1"
          >
            <UserDataForm />
          </Panel>
        </Collapse>
      </div>
      <ActivateUser />
      <UserEvents />
    </Container>
  );
};

export default MyAccount;
