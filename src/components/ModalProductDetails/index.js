import style from './style.module.scss';
import AddToCart from '../../assets/img/shopping-cart/shopping-cart-add.svg';
import { useEffect, useState } from 'react';
import notify from '../../utils/notify';
import api from '../../services/api';
import { useStores } from '../../stores';


export default function ModalProductDetails({ setProductModalOpen, requestedId }) {
  const { cartStore: { cartItems, setCartItems } } = useStores();
  const [product, setProduct] = useState({});


  useEffect(() => {
    async function getProducts(id) {
      try {
        const result = await api.get(`/products/${id}`);
        const { data } = result;

        if (!data.length) {
          return;
        }

        setProduct(data[0]);

      } catch (error) {
        const { request } = error;
        if (request) {
          notify('error', request.response);
        }
      }
    }
    getProducts(requestedId);
  }, []);


  function addToCart(product) {

    const cart = [...cartItems];
    const findProduct = cart.find((item) => item.id === product.id);


    if (!findProduct) {
      cart.push(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          stock: product.stock,
          quantity: 1
        }
      )
      setCartItems(cart);
      return;
    }

    findProduct.quantity = findProduct.quantity + 1;
    setCartItems(cart);
  }


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
          {product &&
            <>
              <h2>{product.name}</h2>
              <img src={product.image} alt="product showcase" className={style.showcase} />
              <div className={style['product-info']}>
                <div className={style.details}>
                  <p>$ {product.price}</p>
                  <p>Stock: {product.stock}</p>
                  <p>Category: {product.category}</p>
                </div>
                <h3>Product description</h3>
                <p className={style.description}>
                  {product.description}
                </p>
              </div>
              <div className={style['button-container']}>
                {product.stock === 0
                  ?
                  <p className={style.red}>This product is out of stock!</p>
                  :
                  <button
                    className={style['add-to-cart']}
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                    <img src={AddToCart} alt="cart icon" />
                  </button>
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}