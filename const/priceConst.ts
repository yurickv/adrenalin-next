// ________________Абонементи_________________//

export const subscriptionPasses = [
  {
    serviceName: '1 тренування',
    plans: [{ id: '1', availability: '1 тренування', price: '100' }],
  },
  {
    serviceName: '8 тренувань',
    plans: [{ id: '2', availability: '1 місяць', price: '530' }],
  },
  {
    serviceName: '12 тренувань',
    plans: [{ id: '3', availability: '1 місяць', price: '600' }],
  },
  {
    serviceName: 'Безліміт',
    plans: [
      { id: '4', availability: '1 місяць', price: '700' },
      { id: '5', availability: '3 місяці', price: '1800' },
      { id: '6', availability: '6 місяців', price: '3300' },
      { id: '7', availability: '1 рік', price: '6000' },
    ],
  },
];

export const coachPasses = [
  {
    serviceName: 'Тренування з тренером',
    plans: [
      { id: '8', availability: '1 тренування з тренером', price: '400' },
      { id: '9', availability: '4 тренування з тренером', price: '1530' },
      { id: '10', availability: '8 тренувань з тренером', price: '2530' },
      { id: '11', availability: '12 тренувань з тренером', price: '3400' },
    ],
  },
];

export const plansPasses = [
  {
    serviceName: 'План харчування',
    plans: [
      { id: '12', availability: '1 тиждень', price: '250' },
      { id: '13', availability: '1 місяць', price: '750' },
    ],
  },
  {
    serviceName: 'План тренування',
    plans: [{ id: '14', availability: '1 місяць', price: '300' }],
  },
];

export const monthPass = [
  {
    id: '1',
    quantity: '1',
    price: '100',
    availability: '1 тренування',
    serviceName: 'тренування',
  },
  {
    id: '2',
    quantity: '8',
    price: '530',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    id: '3',
    quantity: '12',
    price: '600',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    quantity: 'Безліміт',
    price: '700',
    availability: '1 місяць',
    serviceName: '',
  },
];

export const yearPass = [
  {
    quantity: '3',
    price: '1800',
    availability: '3 місяці',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    price: '3300',
    availability: '6 місяців',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    price: '6000',
    availability: '12 місяців',
    serviceName: 'місяців',
  },
];

// ________________Персональні тренування_________________//
export const coachServices = [
  {
    id: '8',
    quantity: '1',
    price: '400',
    availability: '1 тренування',
    serviceName: 'тренування з тренером',
  },
  {
    id: '9',
    quantity: '4',
    price: '1530',
    availability: '15 днів',
    serviceName: 'тренування з тренером',
  },
  {
    id: '10',
    quantity: '8',
    price: '2530',
    availability: '1 місяць',
    serviceName: 'тренувань з тренером',
  },
  {
    id: '11',
    quantity: '12',
    price: '3400',
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
    price: '250',
  },
  {
    quantity: '30',
    availability: '1 місяць',
    price: '750',
  },
];

export const foodPlanFullProgram = [
  {
    quantity: '1',
    price: '250',
    serviceName: 'тиждень',
    availability: '1 тиждень',
  },
  {
    quantity: '30',
    price: '750',
    serviceName: 'днів',
    availability: '1 місяць',
  },
];
export const trainingPlanFullProgram = [
  {
    quantity: '1',
    price: '300',
    serviceName: 'тиждень',
    availability: '1 тиждень',
  },
];
