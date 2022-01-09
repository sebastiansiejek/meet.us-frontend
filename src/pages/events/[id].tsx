import { useSingleEventPageQuery } from 'src/generated/gqlQueries';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Event from 'src/components/pages/Event';
import { getSession, useSession } from 'next-auth/react';

interface IEventPage {
  id: string;
  userId?: string;
}

const EventPage: React.FC<IEventPage> = ({ id, userId }) => {
  const session: any = useSession();
  const loggedUserId = session.data?.user?.id;

  const { data } = useSingleEventPageQuery({
    id,
    ...((loggedUserId || userId) && { userId: loggedUserId || userId }),
  });

  if (data && data.event) {
    return (
      <div>
        <Event data={data} />
      </div>
    );
  }

  return <></>;
};

export const getServerSideProps = async (ctx: any) => {
  const { params, locale } = ctx;
  const session: any = await getSession(ctx);
  const userId = session?.user?.id || false;

  return {
    props: {
      id: params.id,
      userId,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default EventPage;
