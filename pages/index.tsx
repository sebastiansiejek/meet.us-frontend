import Login from 'components/Login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <Login />
  </div>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'form'])),
  },
});

export default IndexPage;
