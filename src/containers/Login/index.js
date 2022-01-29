import { Link } from 'react-router-dom';
import style from './style.module.scss';

export function Login() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.image}>
          <h2>
            Welcome to Pet Pop!
          </h2>
        </div>
        <form className={style.form}>
          <h2>Login area:</h2>
          <div className={style['input-container']}>
            <div className={style.input}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Insert your username"
              />
            </div>
            <div className={style.input}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                placeholder="Insert your password"
              />
            </div>
          </div>
          <button>
            Login
          </button>
        </form>
        <Link to="/register">
          New here? Create an account!
        </Link>
      </div>
    </div>
  );
}
