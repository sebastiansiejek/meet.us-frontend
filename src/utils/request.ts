import { routes } from 'src/routes/routes';
import { getSession, signOut } from 'next-auth/react';

export const request = async (
  query: string,
  variables = {},
  locale?: string,
) => {
  try {
    const session = await getSession();
    const accessToken = session?.accessToken;

    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && ({ Authorization: `Bearer ${accessToken}` } as any)),
        'Accept-Language': locale
          ? locale
          : (typeof document !== 'undefined' &&
              document.querySelector('html')?.getAttribute('lang')) ||
            'en',
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
  } catch (error: any) {
    if (error.error.message === 'Unauthorized') {
      signOut({
        redirect: true,
        callbackUrl: routes.joinToUs.href,
      });
    }
  }
};
