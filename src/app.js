import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@/components/layout';

import { GlobalStyle } from './style/global';

const Home = React.lazy(() => import('@/pages/home'));
const Users = React.lazy(() => import('@/pages/users'));

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
      <BrowserRouter>
        <Layout>
          <Switch>
            <LazyRoute exact path="/" lazy={Home} />
            <LazyRoute exact path="/users" lazy={Users} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}
