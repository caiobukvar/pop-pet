import style from './style.module.scss';

export function Home() {

  const products = [
    { id: 1, name: 'bolinha lisa', price: '12,90' },
    { id: 2, name: 'osso', price: '5' },
    { id: 3, name: 'ração', price: '27,90' },
    { id: 4, name: 'coleira', price: '22,90' },
    { id: 5, name: 'cama para cachorros', price: '39,90' },
    { id: 6, name: 'cama para gatos', price: '29,90' },
    { id: 7, name: 'arranhador', price: '32' },
    { id: 8, name: 'catnip', price: '15' },
    { id: 9, name: 'bolinha espinhada', price: '10' },
  ]

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>PET POP</h2>
        <div className={style.filter}>
          <input type="text" />
        </div>
        <div className={style['header-actions']}>
          <div>
            carrinho aqui
          </div>
          <div>
            Login/Register aqui
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.products}>
          {products.map(product => (
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