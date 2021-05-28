import 'tailwindcss/tailwind.css';
import GlobalStyles from 'src/styles/GlobalStyles';
import Main from 'src/components/templates/Main';
import NProgress from 'nprogress';
import Navbar from 'src/components/Navbar';
import Router from 'next/router';
import store from 'src/store/store';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Hydrate } from 'react-query/hydration';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';

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
