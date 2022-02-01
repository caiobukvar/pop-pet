import { useLocalStorage } from 'react-use';

export function useUser() {
  const [token, setToken, removeToken] = useLocalStorage('token');
  const [userData, setUserData, removerUserData] = useLocalStorage('userData');
  const [cartItems, setCartItems] = useLocalStorage('cart');

  function handleClearUserData() {
    removeToken();
    removerUserData();
  }

  return {
    token,
    setToken,
    userData,
    setUserData,
    handleClearUserData,
    setCartItems,
    cartItems
  };
}