import React from 'react';
import Container from 'src/components/Container';
import UserEvents from 'src/components/UserEvents';
import PageHeader from 'src/components/PageHeader';
import UserDataForm from 'src/components/User/UserDataForm';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import { ContactsTwoTone } from '@ant-design/icons';
import { useCurrentUserIdQuery } from 'src/generated/gqlQueries';

export interface MyAccountProps {}

const MyAccount: React.FunctionComponent<MyAccountProps> = ({}) => {
  const { Panel } = Collapse;
  const { t } = useTranslation();

  const currentUserIdQuery = useCurrentUserIdQuery();
  const userId = currentUserIdQuery.data?.currentUser.id;

  return (
    <Container>
      <PageHeader title="My account" />
      <div className="mb-8">
        <Collapse>
          <Panel
            header={
              <div className="inline-flex items-center">
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
      {userId && <UserEvents userId={userId} />}
    </Container>
  );
};

export default MyAccount;
