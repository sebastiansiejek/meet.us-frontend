import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MyAccountPage from 'src/components/pages/MyAccount';

const MyAccount = () => {
  return <MyAccountPage />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default MyAccount;
