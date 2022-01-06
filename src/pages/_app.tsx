import 'tailwindcss/tailwind.css';
import 'src/styles/leaflet.css';
import GlobalStyles from 'src/styles/GlobalStyles';
import Main from 'src/components/templates/Main';
import NProgress from 'nprogress';
import Router from 'next/router';
import store from 'src/store/store';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Hydrate } from 'react-query/hydration';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  NProgress.configure({ showSpinner: true });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyles />
            <Main Component={Component} pageProps={pageProps} />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp);
