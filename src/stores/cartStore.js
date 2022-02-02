import { useLocalStorage } from 'react-use';

export function useCart() {
  const [cartItems, setCartItems, clearCart] = useLocalStorage('cart');

  function handleClearCart() {
    clearCart();
  }

  return {
    handleClearCart,
    setCartItems,
    cartItems
  };
}