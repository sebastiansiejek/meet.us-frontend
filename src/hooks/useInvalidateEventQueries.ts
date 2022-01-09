import { useQueryClient } from 'react-query';

const useInvalidateEventQueries = () => {
  const queryClient = useQueryClient();

  const invalidate = (eventId?: string) => {
    queryClient.invalidateQueries('FindUserEvents');
    queryClient.invalidateQueries('SearchEvents');
    queryClient.invalidateQueries([
      'SingleEventPage',
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
