import { IGeocodeSearchApiGetParams } from './../services/api/here/GeocodeSearchApi';
import { GET_GEOCODE_SEARCH_QUERY } from './../constants/queriesConstants';
import { useQuery, UseQueryOptions } from 'react-query';
import GeocodeSearchApi from 'src/services/api/here/GeocodeSearchApi';

const useGeocodeSearchQuery = (
  params: IGeocodeSearchApiGetParams,
  options?: UseQueryOptions,
) =>
  useQuery(
    [GET_GEOCODE_SEARCH_QUERY, params],
    () => new GeocodeSearchApi().get(params),
    options as any,
  );

export default useGeocodeSearchQuery;
