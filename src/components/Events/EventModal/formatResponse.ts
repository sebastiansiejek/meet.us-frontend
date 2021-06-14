import dayjs from 'dayjs';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';

export const formatResponse = (response: SingleEventPageQuery['event']): {} => {
  return {
    ...response,
    dates: [dayjs(response.startDate), dayjs(response.endDate)],
  };
};
