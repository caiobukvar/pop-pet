import { createContext, useContext } from 'react';
import { useCart } from './cartStore';
import { useUser } from './userStore';

const storesCtx = createContext(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider(props) {
  const userStore = useUser();
  const cartStore = useCart();

  return (
    <storesCtx.Provider value={{ userStore, cartStore }}>
      {props.children}
    </storesCtx.Provider>
  );
}
