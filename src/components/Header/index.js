import { Link } from "react-router-dom";
import { useStores } from "../../stores";
import MagnifyingGlass from '../../assets/img/magnifying-glass.svg';
import ShoppingCart from '../../assets/img/shopping-cart/shopping-cart.svg';
import Login from '../../assets/img/login-button.svg';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import style from './style.module.scss';
import { useState } from "react";


export default function Header({ setSearchTerm }) {

  const {
    userStore: { token, handleClearUserData },
    cartStore: { cartItems, setCartItems }
  } = useStores();

  const [isCartOpen, setIsCartOpen] = useState();

  const history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleLogout() {
    handleClearUserData();
    history.push("/login");
  }

  function handleCheckout() {
    history.push("/checkout");
  }

  return (
    <div className={style.header}>
      <h2>PET POP</h2>
      <div className={style.filter}>
        <input
          className={style['filter-input']}
          type="text"
          placeholder="Buscar item por nome, categoria, preço..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={style['filter-button']} type="button">
          <img
            src={MagnifyingGlass}
            alt="magnigying glass for filter input"
          />
        </button>
      </div>
      <div className={style['header-actions']}>
        <button className={style.cart} type="button" onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={ShoppingCart} alt="" />
        </button>
        {
          token
            ?
            <button className={style.login} type="button" onClick={handleLogout}>
              <p>Logout</p>
              <img src={Login} alt="" />
            </button>
            :
            <button className={style.login} type="button" onClick={handleLogin}>
              <p>Login</p>
              <img src={Login} alt="" />
            </button>
        }
        {!token &&
          <Link to="/register">
            <p className={style.register}>Register</p>
          </Link>}
      </div>
      {isCartOpen &&
        <div className={style['cart-container']}>
          <div className={style.cart}>
            <div>
              <h3>Shopping Cart</h3>
            </div>
            <div className={style['cart-products']}>
              {cartItems.map((product) => (
                <div className={style.products} key={product.id}>
                  <div className={style.name} key={product.id}>
                    {product.name}
                  </div>
                  <div className={style.info} key={product.id}>
                    <p>Subtotal: ${product.price * product.quantity}</p>

                    <p>Quantity: {product.quantity}</p>

                    <p>Units left: {product.stock}</p>
                  </div>
                </div>
              ))}
              <div
                className={style.checkout}
                type="button"
                onClick={() => handleCheckout()
                }>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}