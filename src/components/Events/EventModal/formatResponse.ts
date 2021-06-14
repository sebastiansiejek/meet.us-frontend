import dayjs from 'dayjs';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';

export const formatResponse = (response: SingleEventPageQuery['event']): {} => {
  console.log(response);
  return {
    ...response,
    dates: [dayjs(response.startDate), dayjs(response.endDate)],
  };
};
