import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MyAccountPage from 'src/components/pages/MyAccount';
import { routes } from 'src/routes/routes';

const MyAccount = () => {
  return <MyAccountPage />;
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
