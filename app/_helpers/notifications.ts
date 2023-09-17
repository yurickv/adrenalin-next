import { toast } from 'react-toastify';

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    progress: undefined,
    pauseOnHover: false,
    theme: 'light',
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    progress: undefined,
    theme: 'light',
  });
};
