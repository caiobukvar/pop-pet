import { Link, useLocation, useHistory } from 'react-router-dom';
import style from './style.module.scss';

export default function FormCards({ register, handleSubmit, onSubmit }) {
  const location = useLocation();
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <>
      <div className={style.header}>
        {location.pathname === "/register"
          ?
          <>
            <h2>Welcome to POP PET!</h2>
            <p>Please, inform us some data so we can proceed with your registration!</p>
          </>
          :
          <h2>Welcome back to POP PET!</h2>
        }
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {location.pathname === "/register"
          &&
          (<>
            <div className={style['form-content']}>
              <div className={style.row}>
                <div className={style.input}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Insert your name"
                    {...register('name', { required: true })}
                  />
                </div>
                <div className={style.input}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Insert desired username"
                    {...register('username', { required: true })}
                  />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input}>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    placeholder="Insert your CPF"
                    {...register('cpf', { required: true })}
                  />
                </div>
                <div className={style.input}>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Insert your email"
                    {...register('email', { required: true })}
                  />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Insert your phone number"
                    {...register('phone', { required: true })}
                  />
                </div>
                <div className={style.input}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Insert your address"
                    {...register('address', { required: true })}
                  />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Insert your password"
                    {...register('password', { required: true })}
                  />
                </div>
                <div className={style.input}>
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    {...register('confirmPassword', { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className={style['row-button']}>
              <button type="button" className={style.cancel} onClick={goBack}>
                Cancel
              </button>
              <button type="submit" onSubmit={handleSubmit(onSubmit)}>
                Register
              </button>
            </div>
          </>
          )
        }

        {location.pathname === '/login'
          &&
          (<div className={style['login-content']}>
            <div className={style['form-login']} onSubmit={handleSubmit(onSubmit)}>
              <h2>Login area:</h2>
              <div className={style['input-container-login']}>
                <div className={style.inputLogin}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Insert your username"
                    {...register('username', { required: true })}
                  />
                </div>
                <div className={style.inputLogin}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Insert your password"
                    {...register('password', { required: true })}
                  />
                </div>
              </div>
              <button type="submit" onSubmit={handleSubmit(onSubmit)}>
                Login
              </button>
            </div>
            <Link to="/register">
              New here? Create an account!
            </Link>
          </div>
          )
        }
      </form>
    </>
  );
}