import { request } from './request';

export const useFetchData = <TData, TVariables>(
  query: string,
  vars?: TVariables,
): (() => Promise<TData>) => {
  return async (variables?: TVariables) => request(query, variables || vars);
};
