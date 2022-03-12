import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { routes } from 'src/routes/routes';
import Container from 'src/components/Container';
import ConfirmResetPassword from 'src/components/ConfirmResetPassword';
import PageHeader from 'src/components/PageHeader';
import { useTranslation } from 'next-i18next';

const ResetPassword = ({ token }: any) => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
        <PageHeader title={t('Reset password')} />
        <ConfirmResetPassword token={token} />
      </div>
    </Container>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const { locale }: any = ctx;
  const token = ctx.query?.token || '';

  if (!token) {
    return {
      notFound: true,
    };
  }

  if (session?.accessToken) {
    return {
      redirect: {
        destination: routes.myAccount.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default ResetPassword;
