// ________________Абонементи_________________//

export const subscriptionPasses = [
  {
    serviceName: '1 тренування',
    plans: [{ id: '1', availability: '1 тренування', price: '80' }],
  },
  {
    serviceName: '8 тренувань',
    plans: [{ id: '2', availability: '1 місяць', price: '480' }],
  },
  {
    serviceName: '12 тренувань',
    plans: [{ id: '3', availability: '1 місяць', price: '550' }],
  },
  {
    serviceName: 'Безліміт',
    plans: [
      { id: '4', availability: '1 місяць', price: '650' },
      { id: '5', availability: '3 місяці', price: '1650' },
      { id: '6', availability: '6 місяців', price: '3000' },
      { id: '7', availability: '1 рік', price: '5400' },
    ],
  },
];

export const coachPasses = [
  {
    serviceName: 'Тренування з тренером',
    plans: [
      { id: '8', availability: '1 тренування з тренером', price: '330' },
      { id: '9', availability: '4 тренування з тренером', price: '1280' },
      { id: '10', availability: '8 тренувань з тренером', price: '2080' },
      { id: '11', availability: '12 тренувань з тренером', price: '2750' },
    ],
  },
];

export const plansPasses = [
  {
    serviceName: 'План харчування',
    plans: [
      { id: '12', availability: '1 тиждень', price: '150' },
      { id: '13', availability: '1 місяць', price: '500' },
    ],
  },
  {
    serviceName: 'План тренування',
    plans: [{ id: '14', availability: '1 місяць', price: '200' }],
  },
];

export const monthPass = [
  {
    id: '1',
    quantity: '1',
    price: '80',
    availability: '1 тренування',
    serviceName: 'тренування',
  },
  {
    id: '2',
    quantity: '8',
    price: '480',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    id: '3',
    quantity: '12',
    price: '550',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    quantity: 'Безліміт',
    price: '650',
    availability: '1 місяць',
    serviceName: '',
  },
];

export const yearPass = [
  {
    quantity: '3',
    price: '1650',
    availability: '3 місяці',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    price: '3000',
    availability: '6 місяців',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    price: '5400',
    availability: '12 місяців',
    serviceName: 'місяців',
  },
];

// ________________Персональні тренування_________________//
export const coachServices = [
  {
    id: '8',
    quantity: '1',
    price: '330',
    availability: '1 тренування',
    serviceName: 'тренування з тренером',
  },
  {
    id: '9',
    quantity: '4',
    price: '1280',
    availability: '15 днів',
    serviceName: 'тренування з тренером',
  },
  {
    id: '10',
    quantity: '8',
    price: '2080',
    availability: '1 місяць',
    serviceName: 'тренувань з тренером',
  },
  {
    id: '11',
    quantity: '12',
    price: '2750',
    availability: '1 місяць',
    serviceName: 'тренувань з тренером',
  },
];

// ________________Плани тренування/харчування_________________//

export const plans = [
  {
    serviceName: 'План харчування',
    id: '12',
  },
  {
    serviceName: 'План тренування',
    id: '13',
  },
];

export const plansPrices = [
  {
    quantity: '1',
    availability: '1 тиждень',
    price: '200',
  },
  {
    quantity: '30',
    availability: '1 місяць',
    price: '500',
  },
];

export const foodPlanFullProgram = [
  {
    quantity: '1',
    price: '150',
    serviceName: 'тиждень',
    availability: '1 тиждень',
  },
  {
    quantity: '30',
    price: '500',
    serviceName: 'днів',
    availability: '1 місяць',
  },
];
export const trainingPlanFullProgram = [
  {
    quantity: '1',
    price: '150',
    serviceName: 'тиждень',
    availability: '1 тиждень',
  },
];
