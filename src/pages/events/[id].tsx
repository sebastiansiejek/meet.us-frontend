import Event from 'src/components/pages/Event';
import { dehydrate, QueryClient } from 'react-query';
import { getSession, useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSingleEventPageQuery } from 'src/generated/gqlQueries';

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
    return <Event data={data} />;
  }

  return <></>;
};

export const getServerSideProps = async (ctx: any) => {
  const { params, locale } = ctx;
  const session: any = await getSession(ctx);
  const userId = session?.user?.id || false;
  const eventId = params.id;
  const queryClient = new QueryClient();

  const eventParams = {
    id: eventId,
    ...(userId && { userId }),
  };

  await queryClient.prefetchQuery(
    useSingleEventPageQuery.getKey(eventParams),
    () => useSingleEventPageQuery.fetcher(eventParams).call(null),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      id: eventId,
      userId,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default EventPage;
