import style from './style.module.scss';
import Construction from '../../assets/img/construction.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export function Checkout() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>Whoops!</h2>
        <p>This page is still under construction</p>
        <img src={Construction}
          alt="under cosntruction"
          className={style.construction}
        />
        <button className={style.home} onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}