import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { User, useUsersQuery } from 'src/generated/gqlQueries';
import UsersCard from 'src/UsersCard';

const IndexPage = () => {
  const { data } = useUsersQuery();

  return <>{data && <UsersCard users={data.users as Array<User>} />}</>;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
