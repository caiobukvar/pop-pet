import style from './style.module.scss';
import AddToCart from '../../assets/img/shopping-cart/shopping-cart-add.svg';
import { useEffect, useState } from 'react';
import notify from '../../utils/notify';
import api from '../../services/api';


export default function ModalProductDetails({ setProductModalOpen, requestedId }) {
  const [productArray, setProductArray] = useState({});


  useEffect(() => {
    async function getProducts(id) {
      try {
        const result = await api.get(`/products/${id}`);
        const { data } = result;
        setProductArray(data);

      } catch (error) {
        const { request } = error;
        if (request) {
          notify('error', request.response);
        }
      }
    }
    getProducts(requestedId);
  }, []);

  console.log(productArray)
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.header}>
          <button
            className={style['close-btn']}
            type="button"
            onClick={() => setProductModalOpen(false)}
          >
            X
          </button>
        </div>
        <div className={style.product}>
          {productArray.length > 0 &&
            <>
              <h2>{productArray[0].name}</h2>
              <img src={productArray[0].image} alt="product showcase" className={style.showcase} />
              <div className={style['product-info']}>
                <div className={style.details}>
                  <p>${productArray[0].price}</p>
                  <p>Stock: {productArray[0].stock}</p>
                  <p>Category: {productArray[0].category}</p>
                </div>
                <h3>Product description</h3>
                <p className={style.description}>
                  {productArray[0].description}
                </p>
              </div>
            </>
          }

          <div className={style['button-container']}>
            <button className={style['add-to-cart']}>
              Add to cart
              <img src={AddToCart} alt="cart icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}