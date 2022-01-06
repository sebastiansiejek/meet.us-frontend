import { request } from './request';

export const useFetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
): (() => Promise<TData>) => {
  return async () => request(query, variables);
};
