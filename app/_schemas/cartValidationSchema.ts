import * as yup from 'yup';

export const cartValidationSchema = yup.object().shape({
  sender_first_name: yup
    .string()
    .test('is-cyrillic', "Ім'я повинно бути написано кирилицею", value => {
      if (!value) return true;
      return /^[А-ЯІЇЄа-яіїєҐґ]+$/.test(value);
    })
    .required("Введіть ім'я"),

  sender_last_name: yup
    .string()
    .test('is-cyrillic', 'Прізвище повинно бути написано кирилицею', value => {
      if (!value) return true;
      return /^[А-ЯІЇЄа-яіїєҐґ]+$/.test(value);
    })
    .required('Введіть прізвище'),

  phone: yup
    .string()
    .test(
      'is-phoneNumber',
      'Телефон повинен починатися на +380 і мати 9 цифр після цього',
      value => {
        if (!value) return true;
        return /^\+380\d{9}$/.test(value);
      }
    )
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
