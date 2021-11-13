import Container from 'src/components/Container';
import EventModal from 'src/components/Events/EventModal';
import EventsWithSearch from 'src/components/Events/EventsWithSearch';
import isUndefined from 'lodash/isUndefined';
import { PageHeader as AntdHeader } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { query } = useRouter();
  const q = !isUndefined(query.q) ? query.q : '';
  const { t } = useTranslation();
  const isLogged = useSelector((state: any) => state.user.token);

  return (
    <div>
      <Container>
        <AntdHeader className="mb-14 w-full">
          <div className="items-center justify-between flex flex-col md:flex-row w-full">
            <h1 className="text-6xl mb-8 md:mb-0">{t('Events')}</h1>
            {isLogged !== 'null' && <EventModal />}
          </div>
        </AntdHeader>
      </Container>
      <EventsWithSearch initSearchQuery={`${q}`} />
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
