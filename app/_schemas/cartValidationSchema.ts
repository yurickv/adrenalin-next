import * as yup from 'yup';

export const cartValidationSchema = yup.object().shape({
  sender_first_name: yup
    .string()
    .min(4, 'Не менше 4 символів')
    .max(20, 'Не більше 20 символів')
    .test('is-cyrillic', 'Введіть кирилицею', value => {
      if (!value) return true;
      return /^[А-ЯІЇЄа-яіїєҐґ]+$/.test(value);
    })
    .required("Введіть ім'я"),

  sender_last_name: yup
    .string()
    .min(4, 'Не менше 4 символів')
    .max(20, 'Не більше 20 символів')
    .test('is-cyrillic', 'Введіть кирилицею', value => {
      if (!value) return true;
      return /^[А-ЯІЇЄа-яіїєҐґ]+$/.test(value);
    })
    .required('Введіть прізвище'),

  phone: yup
    .string()
    .test('is-phoneNumber', 'Номер: +380 і 9 цифр опісля', value => {
      if (!value) return true;
      return /^\+380\d{9}$/.test(value);
    })
    .max(13, 'Не більше 13 символів')
    .required('Введіть свій номер телефону'),

  publicOffer: yup
    .boolean()
    .oneOf([true], 'Ви повинні прийняти оферту')
    .required('Ви повинні прийняти оферту'),

  agreement: yup
    .boolean()
    .oneOf([true], 'Ви повинні прийняти умови')
    .required('Ви повинні прийняти умови'),
});
