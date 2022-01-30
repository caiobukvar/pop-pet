import { useForm } from 'react-hook-form';
import style from './style.module.scss';

export function Register() {
  const { register, handleSubmit } = useForm();

  function onSubmit() {
    console.log('test')
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.row}>
            <div className={style.input}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={style.input}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
          </div>
          <div className={style.row}>
            <div className={style.input}>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
            <div className={style.input}>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}