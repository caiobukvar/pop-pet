import React from 'react';
import { Routes } from './routes';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes />
    </React.Suspense>
  );
}

export default App;
