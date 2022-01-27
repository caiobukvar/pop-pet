import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { StoresProvider, useStores } from '../stores';

const Login = React.lazy(async () => import('../containers/Login').then((m) => ({ default: m.Login })));
const Register = React.lazy(async () => import('../containers/Register').then((m) => ({ default: m.Register })));
const Home = React.lazy(async () => import('../containers/Home').then((m) => ({ default: m.Home })));
const Admin = React.lazy(async () => import('../containers/Admin').then((m) => ({ default: m.Admin })));

// function ProtectedRoutes(props) {
//     const { userStore: { token } } = useStores();

//     const { children } = props;

//     return (
//         <Route render={() => (token ? children : <Redirect to="/login" />)} />
//     );
// }

export function Routes() {
  return (
    // <StoresProvider>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/login" />} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />

      {/* <ProtectedRoutes path="/home"> */}
      <Route path="/home" component={Home} />
      <Route path="/home/admin" component={Admin} />
      {/* </ProtectedRoutes> */}
    </Switch>
    // </StoresProvider>
  );
}
