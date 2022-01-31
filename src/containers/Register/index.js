import { useForm } from 'react-hook-form';
import FormCards from '../../components/FormCards';
import style from './style.module.scss';

export function Register() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log('submiting')
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