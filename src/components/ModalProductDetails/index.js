import style from './style.module.scss';
import AddToCart from '../../assets/img/shopping-cart/shopping-cart-add.svg';


export default function ModalProductDetails({ setProductModalOpen }) {
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
          <h2>Product Name</h2>
          <img src="#" alt="product showcase" className={style.showcase} />
          <div className={style['product-info']}>
            <div className={style.details}>
              <p>price</p>
              <p>amount available</p>
            </div>
            <p className={style.description}>This product is ...</p>
          </div>
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