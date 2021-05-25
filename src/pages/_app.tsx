import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import { appWithTranslation } from 'next-i18next';
import GlobalStyles from 'src/styles/GlobalStyles';
import Navbar from 'src/components/Navbar';
import NProgress from 'nprogress';
import Router from 'next/router';
import Main from 'src/components/templates/Main';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyles />
          <Navbar />
          <Main Component={Component} pageProps={pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
