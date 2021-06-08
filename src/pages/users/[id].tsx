import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface IUserPage {
  id: string;
}

const User: React.FC<IUserPage> = ({ id }) => {
  return <>{id}</>;
};

export const getServerSideProps = async ({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) => ({
  props: {
    id: params.id,
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default User;
