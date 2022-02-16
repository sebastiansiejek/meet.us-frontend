import 'tailwindcss/tailwind.css';
import 'src/styles/leaflet.css';
import GlobalStyles from 'src/styles/GlobalStyles';
import Main from 'src/components/templates/Main';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Hydrate } from 'react-query/hydration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';
import Favicon from 'src/components/Favicon';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  NProgress.configure({ showSpinner: true });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: process.env.NODE_ENV === 'development' ? Infinity : 10000,
      },
    },
  });

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Favicon />
          <GlobalStyles />
          <Main Component={Component} pageProps={pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp);
