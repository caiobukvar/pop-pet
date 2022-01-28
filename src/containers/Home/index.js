import style from './style.module.scss';
import MagnifyingGlass from '../../assets/img/magnifying-glass.svg';
import ShoppingCart from '../../assets/img/shopping-cart/shopping-cart.svg';
import Login from '../../assets/img/login-button.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Home() {
  const [searchTerm, setSearchTerm] = useState();

  const products = [
    { id: 1, name: 'bolinha lisa', category: 'brinquedos', price: '12,90' },
    { id: 2, name: 'osso', category: 'brinquedos', price: '5' },
    { id: 3, name: 'ração', category: 'alimentos', price: '27,90' },
    { id: 4, name: 'coleira', category: 'utilidades', price: '22,90' },
    { id: 5, name: 'cama para cachorros', category: 'camas', price: '39,90' },
    { id: 6, name: 'cama para gatos', category: 'camas', price: '29,90' },
    { id: 7, name: 'arranhador', category: 'brinquedos', price: '32' },
    { id: 8, name: 'catnip', category: 'utilidades', price: '15' },
    { id: 9, name: 'bolinha espinhada', category: 'brinquedos', price: '10' },
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