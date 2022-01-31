import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import FormCards from '../../components/FormCards';
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
      const body = { username, password };
      const result = await api.post('/login', body);

      console.log(result);

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
        <FormCards
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
