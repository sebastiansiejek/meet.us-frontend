import Login from 'components/Login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage = () => (
  <>
    <Login />
  </>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'form'])),
  },
});

export default IndexPage;
