import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AV from 'leancloud-storage';

import Layout from '@/components/layout';

import { GlobalStyle } from './style/global';

const Home = React.lazy(() => import('@/pages/home'));
const Trials = React.lazy(() => import('@/pages/trials'));
const SignIn = React.lazy(() => import('@/pages/sign-in'));

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
        <Switch>
          <LazyRoute exact path="/sign-in" lazy={SignIn} />

          <Route>
            {() => {
              if (!AV.User.current()) {
                return <Redirect to="/sign-in" />;
              }

              return (
                <Layout>
                  <Switch>
                    <LazyRoute exact path="/" lazy={Home} />
                    <LazyRoute exact path="/trials" lazy={Trials} />
                  </Switch>
                </Layout>
              );
            }}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
