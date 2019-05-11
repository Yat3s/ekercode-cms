import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@/components/layout';

import { GlobalStyle } from './style/global';

const Home = React.lazy(() => import('@/pages/home'));

function LazyRoute({ lazy: Lazy, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        return (
          <Suspense fallback={null}>
            <Lazy {...routeProps} />
          </Suspense>
        );
      }}
    />
  );
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BrowserRouter>
          <Switch>
            <LazyRoute exact path="/" lazy={Home} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </>
  );
}
