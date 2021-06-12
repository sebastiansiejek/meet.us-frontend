import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Container from 'src/components/Container';
import isUndefined from 'lodash/isUndefined';
import EventsWithSearch from 'src/components/Events/EventsWithSearch';
import { PageHeader as AntdHeader } from 'antd';
import { useTranslation } from 'react-i18next';
import EventModal from 'src/components/Events/EventModal';
import { useSelector } from 'react-redux';

const IndexPage = () => {
  const { query } = useRouter();
  const q = !isUndefined(query.q) ? query.q : '';
  const { t } = useTranslation();
  const isLogged = useSelector((state: any) => state.user.token);

  return (
    <Container>
      <AntdHeader className="mb-14 w-full">
        <div className="items-center justify-between flex flex-col md:flex-row w-full">
          <h1 className="text-6xl mb-8 md:mb-0">{t('Events')}</h1>
          {isLogged && <EventModal />}
        </div>
      </AntdHeader>
      <EventsWithSearch initSearchQuery={`${q}`} />
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
