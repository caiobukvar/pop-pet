import React from 'react';
import { AppRoutes } from './routes';

function App() {
  return (
    <React.Suspense fallback={null}>
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
