import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store/store';

export const useFetchData = <TData, TVariables>(
  query: string,
): (() => Promise<TData>) => {
  const token = useSelector((state: IStore) => state.user.token);

  return async (variables?: TVariables) => {
    const res = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};
