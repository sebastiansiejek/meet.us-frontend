import AuthService from 'src/services/AuthService';

export const useFetchData = <TData, TVariables>(
  query: string,
): (() => Promise<TData>) => {
  return async (variables?: TVariables) => {
    const res = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`,
        'Accept-Language':
          document.querySelector('html')?.getAttribute('lang') || 'en',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const error: Error = new Error(json.errors[0].message);
      throw {
        error,
        ...{ data: json.errors[0].extensions.exception.response },
      };
    }

    return json.data;
  };
};
