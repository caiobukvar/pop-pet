import { createContext, useContext } from 'react';

import { useUser } from './userStore';

const storesCtx = createContext(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider(props) {
  const userStore = useUser();

  return (
    <storesCtx.Provider value={{ userStore }}>
      {props.children}
    </storesCtx.Provider>
  );
}
