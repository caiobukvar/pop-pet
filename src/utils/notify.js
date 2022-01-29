import { toast } from 'react-toastify';

export default function notify(type, message, duration) {
  toast[type](message, {
    theme: 'colored',
    position: toast.POSITION.TOP_RIGHT,
    autoClose: duration || 2000,
    closeOnClick: true,
  });
}
