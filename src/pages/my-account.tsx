import Container from 'src/components/Container';
import EventModal from 'src/components/Events/EventModal';
import PageHeader from 'src/components/PageHeader';
import React from 'react';
import UserDataForm from 'src/components/User/UserDataForm';
import UserEvents from 'src/components/UserEvents';
import UserEventsCalendar from 'src/components/UserEventsCalendar';
import { Collapse } from 'antd';
import { ContactsTwoTone } from '@ant-design/icons';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { routes } from 'src/routes/routes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCurrentUserIdQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';

const MyAccount = () => {
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
      {userId && (
        <div>
          <UserEvents userId={userId} />
          <EventModal />
          <UserEventsCalendar userId={userId} />
        </div>
      )}
    </Container>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const { locale }: any = ctx;

  if (!session?.accessToken) {
    return {
      redirect: {
        destination: routes.joinToUs.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default MyAccount;
