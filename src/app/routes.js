import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { StoresProvider, useStores } from '../stores';

const Home = React.lazy(async () => import('../containers/Home').then((m) => ({ default: m.Home })));
const Login = React.lazy(async () => import('../containers/Login').then((m) => ({ default: m.Login })));
const Register = React.lazy(async () => import('../containers/Register').then((m) => ({ default: m.Register })));
const Admin = React.lazy(async () => import('../containers/Admin').then((m) => ({ default: m.Admin })));
const Checkout = React.lazy(async () => import('../containers/Checkout').then((m) => ({ default: m.Checkout })));

function ProtectedRoutes(props) {
  const { userStore: { token } } = useStores();

  const { children } = props;

  return (
    <Route render={() => (token ? children : <Redirect to="/home" />)} />
  );
}

export function Routes() {
  return (
    <Switch>
      <StoresProvider>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />

        <ProtectedRoutes>
          <Route path="/admin" component={Admin} />
          <Route path="/checkout" component={Checkout} />
        </ProtectedRoutes>
      </StoresProvider>
    </Switch>
  );
}
