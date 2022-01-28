import style from './style.module.scss';
import MagnifyingGlass from '../../assets/img/magnifying-glass.svg';
import ShoppingCart from '../../assets/img/shopping-cart/shopping-cart.svg';
import Login from '../../assets/img/login-button.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Home() {
  const [searchTerm, setSearchTerm] = useState();

  const products = [
    { id: 1, name: 'Smooth rubber ball', category: 'Toys', price: 1290, stock: 6 },
    { id: 2, name: 'Chewing bone', category: 'Toys', price: 500, stock: 3 },
    { id: 3, name: 'Dog food - Special Dog', category: 'Food', price: 2790, stock: 12 },
    { id: 4, name: 'Collar', category: 'Utility', price: 2290, stock: 4 },
    { id: 5, name: 'Bed for dogs', category: 'Utility', price: 3990, stock: 1 },
    { id: 6, name: 'Bed for cats', category: 'Utility', price: 2990, stock: 0 },
    { id: 7, name: 'Scratcher for cats', category: 'Toys', price: 3200, stock: 2 },
    { id: 8, name: 'Catnip', category: 'Utility', price: 1500, stock: 1 },
    { id: 9, name: 'Clover rubber ball', category: 'Toys', price: 1000, stock: 0 },
  ]

  function inputFilter(val) {
    if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    if (val.price.toLowerCase().includes(searchTerm.toLowerCase())) {
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
          <button className={style.login} type="button">
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
        <h2>Conheça nossos produtos</h2>
        <div className={style.products}>
          {products.filter(inputFilter).map(product => (
            <div key={product.id} className={style['card-container']}>
              <span>{product.name}</span>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
}