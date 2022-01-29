import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../../services/api';
import { useStores } from '../../stores';
import notify from '../../utils/notify';
import style from './style.module.scss';

export function Login() {
  const { userStore: { setUserData, setToken } } = useStores();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const history = useHistory();

  async function onSubmit({ username, password }) {
    try {
      const body = { userName: username, password };
      const result = await api.post('/login', body);

      if (result.status !== 200) {
        throw 'Falha ao efetuar o login';
      }

      const { data: { token, user: userData } } = result;
      setUserData(userData);
      setToken(token);

      history.push('/home');
    } catch (error) {
      const { request } = error;
      if (request) {
        notify('error', request.response);
      }
    }
  }

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
                {...register('username')}
              />
            </div>
            <div className={style.input}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                placeholder="Insert your password"
                {...register('password')}
              />
            </div>
          </div>
          <button onSubmit={handleSubmit(onSubmit)}>
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
