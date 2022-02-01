import style from './style.module.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import ModalProductDetails from '../../components/ModalProductDetails';
import notify from '../../utils/notify';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [requestedId, setRequestedId] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await api.get('/products');
        const { data } = result;
        setProductArray(data);

      } catch (error) {
        const { request } = error;
        if (request) {
          notify('error', request.response);
        }
      }
    }
    getProducts();
  }, []);

  const products = productArray;


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

  function handleOpenProductDetails(id) {
    setProductModalOpen(true);
    setRequestedId(id);

  }

  return (
    <div className={style.container}>
      <Header setSearchTerm={setSearchTerm} />
      <div className={style.content}>
        {productModalOpen &&
          <ModalProductDetails
            setProductModalOpen={setProductModalOpen}
            requestedId={requestedId}
          />
        }
        <div className={style.outdoor} />
        <div className={style['welcome-container']}>
          <div className={style.welcome}>
            <h1>Welcome to POP PET!</h1>
            <div>
              <h2>Here you can find every sort of things for your pet!</h2>
            </div>
            <p className={style.text}>Take a look on some of our products:</p>
          </div>
        </div>
        <div className={style.products}>
          {products.filter(inputFilter).map((product) => (
            <button
              key={product.id}
              className={
                product.stock === 0 ?
                  style['card-container-unavailable'] :
                  style['card-container']
              }
              onClick={() => handleOpenProductDetails(product.id)}
            >
              <h3>{product.name}</h3>
              <div className={style['card-image']}>
                <img src={product.image} alt="" />
              </div>
              <div>
                {product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}
              </div>
              <div className={style['card-bottom']}>
                {product.stock === 0 &&
                  <div className={style['add-to-cart-disabled']}>
                    Unavailable
                  </div>
                }
              </div>
            </button>
          )
          )}
        </div>
      </div>
    </div >
  );
}