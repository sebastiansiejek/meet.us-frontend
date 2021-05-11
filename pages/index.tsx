import Login from 'components/Login';
import Register from 'components/Register';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage = () => (
  <>
    <Login />
    <Register />
  </>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'form'])),
  },
});

export default IndexPage;
