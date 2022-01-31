import style from './style.module.scss';
import MagnifyingGlass from '../../assets/img/magnifying-glass.svg';
import ShoppingCart from '../../assets/img/shopping-cart/shopping-cart.svg';
import Login from '../../assets/img/login-button.svg';
import AddToCart from '../../assets/img/shopping-cart/shopping-cart-add.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  const products = [
    { id: 1, name: 'Smooth rubber ball', category: 'Toys', price: 12.90, stock: 6 },
    { id: 2, name: 'Chewing bone', category: 'Toys', price: 5.00, stock: 3 },
    { id: 3, name: 'Dog food - Special Dog', category: 'Food', price: 27.90, stock: 12 },
    { id: 4, name: 'Collar', category: 'Utility', price: 22.90, stock: 4 },
    { id: 5, name: 'Bed for dogs', category: 'Utility', price: 39.90, stock: 1 },
    { id: 6, name: 'Bed for cats', category: 'Utility', price: 29.90, stock: 0 },
    { id: 7, name: 'Scratcher for cats', category: 'Toys', price: 32.00, stock: 2 },
    { id: 8, name: 'Catnip', category: 'Utility', price: 15.00, stock: 1 },
    { id: 9, name: 'Clover rubber ball', category: 'Toys', price: 10.00, stock: 0 },
  ]

  function inputFilter(val) {
    if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    if (val.price === searchTerm) {
      return val;
    }

    return null;
  }

  return (
    <div className={style.container}>
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
          <button className={style.cart} type="button">
            <img src={ShoppingCart} alt="" />
          </button>
          <button className={style.login} type="button" onClick={handleLogin}>
            <p>Login</p>
            <img src={Login} alt="" />
          </button>
          <Link to="/register">
            <p className={style.register}>Register</p>
          </Link>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.outdoor} />
        <div className={style['welcome-container']}>
          <div className={style.welcome}>
            <h1>Welcome to POP PET!</h1>
            <div>
              <h2>Here you can find every sorts of things for your pet!</h2>
            </div>
            <p className={style.text}>Take a look on some of our products:</p>
          </div>
        </div>
        <div className={style.products}>
          {products.filter(inputFilter).map((product) => (
            <div key={product.id} className={style['card-container']}>
              <h3>{product.name}</h3>
              <div className={style['card-image']}>
                <img src={product.image} alt="" />
              </div>
              <div>
                {product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}
              </div>
              <div className={style['card-bottom']}>
                {product.stock === 0 ?
                  <div className={style['add-to-cart-disabled']}>
                    Unavailable
                  </div>
                  :
                  <button className={style['add-to-cart']}>
                    Add to cart
                    <img src={AddToCart} alt="cart icon" />
                  </button>
                }
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
}