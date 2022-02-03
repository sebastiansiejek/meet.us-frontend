import { useQueryClient } from 'react-query';
import {
  useFindUserEventsQuery,
  useEventsQuery,
  useSingleEventPageQuery,
} from 'src/generated/gqlQueries';

const useInvalidateEventQueries = () => {
  const queryClient = useQueryClient();

  const invalidate = (eventId?: string) => {
    // @ts-ignore
    queryClient.invalidateQueries(useFindUserEventsQuery.getKey()[0]);
    // @ts-ignore
    queryClient.invalidateQueries(useEventsQuery.getKey()[0]);
    queryClient.invalidateQueries([
      // @ts-ignore
      useSingleEventPageQuery.getKey()[0],
      eventId && {
        eventId,
      },
    ]);
  };

  return {
    invalidate,
  };
};

export default useInvalidateEventQueries;
