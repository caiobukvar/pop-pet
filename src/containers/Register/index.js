import { useForm } from 'react-hook-form';
import FormCards from '../../components/FormCards';
import style from './style.module.scss';
import api from '../../services/api';
import notify from '../../utils/notify';
import { useHistory } from 'react-router-dom/';

export function Register() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const history = useHistory();

  async function onSubmit({
    address,
    confirmPassword,
    password,
    cpf,
    email,
    name,
    username,
    phone
  }) {

    try {
      const body = {
        address,
        confirmPassword,
        password,
        cpf,
        email,
        name,
        username,
        phone
      }

      if (password !== confirmPassword) {
        throw 'Passwords must match!';
      }

      const result = await api.post('/register', body);
      console.log(result);

      if (result.status !== 200) {
        throw 'Registration failed!';
      }

      notify('success', result.response);

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