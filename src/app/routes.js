import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { StoresProvider, useStores } from '../stores';

const Home = React.lazy(async () => import('../containers/Home').then((m) => ({ default: m.Home })));
const Login = React.lazy(async () => import('../containers/Login').then((m) => ({ default: m.Login })));
const Register = React.lazy(async () => import('../containers/Register').then((m) => ({ default: m.Register })));
const Admin = React.lazy(async () => import('../containers/Admin').then((m) => ({ default: m.Admin })));

// function ProtectedRoutes(props) {
//     const { userStore: { token } } = useStores();

//     const { children } = props;

//     return (
//         <Route render={() => (token ? children : <Navigate to="/login" />)} />
//     );
// }

export function AppRoutes() {
  return (
    // <StoresProvider>
    <Routes>
      <Route path="/" exact render={() => <Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* <ProtectedRoutes path="/home"> */}
      <Route index path="/home" element={<Home />} />
      <Route path="/home/admin" element={<Admin />} />
      {/* </ProtectedRoutes> */}
      {/* </StoresProvider> */}
    </Routes>
  );
}
