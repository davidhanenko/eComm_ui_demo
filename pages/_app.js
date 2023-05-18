import Router from 'next/router';
import NProgress from 'nprogress';
import smoothscroll from 'smoothscroll-polyfill';
import { ApolloProvider } from '@apollo/client';
import { ScrollProvider } from '../lib/useScroll';
import { SessionProvider } from 'next-auth/react';
import { PaginationStateProvider } from '../context/paginationState';
import { CartStateProvider } from '../context/cartState';
import { MessageStateProvider } from '../context/messageState';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { useApollo } from '../lib/apollo';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';
import '../styles/fonts.css';


// smoothscroll polyfill - safari
if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

Router.events.on('routeChangeStart', () =>
  NProgress.start()
);
Router.events.on('routeChangeComplete', () =>
  NProgress.done()
);
Router.events.on('routeChangeError', () =>
  NProgress.done()
);

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const apolloClient = useApollo(pageProps);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ScrollProvider>
          <CartStateProvider>
            <PaginationStateProvider>
              <MessageStateProvider>
                <LayoutWrapper {...pageProps}>
                  <Component {...pageProps} />
                </LayoutWrapper>
              </MessageStateProvider>
            </PaginationStateProvider>
          </CartStateProvider>
        </ScrollProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
