import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { useStores } from '../../stores';

export function Login() {
  const { userStore: { setUserData, setToken } } = useStores();

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

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

      history.push(`/home/${userData.userType.toLowerCase()}`);
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
