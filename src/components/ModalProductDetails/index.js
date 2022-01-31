import style from './style.module.scss';

export default function ModalProductDetails({ setProductModalOpen }) {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <button type="button" onClick={() => setProductModalOpen(false)}>
          <img src="#" alt="" />
          close
        </button>
        <div className={style.product}>
          <h2>Product Name</h2>
          <img src="#" alt="product showcase" />
          <div className={style['product-info']}>
            <div className={style.details}>
              <p>price</p>
              <p>amount available</p>
            </div>
            <p>description</p>
            <div className={style['button-container']}>
              <button>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}