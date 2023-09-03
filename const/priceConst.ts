// ________________Абонементи_________________//
export const monthPass = [
  {
    quantity: '1',
    price: '80',
    serviceName: 'тренування',
  },
  {
    quantity: '8',
    price: '440',
    serviceName: 'тренувань',
  },
  {
    quantity: '12',
    price: '500',
    serviceName: 'тренувань',
  },
  { quantity: 'Безліміт', price: '540', serviceName: '' },
];

export const passDuration = [
  {
    quantity: '1',
    serviceName: 'місяць',
  },
  {
    quantity: '3',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    serviceName: 'місяців',
  },
];

export const passVariations: { [key: number]: number } = {
  1620: 1500,
  3000: 2760,
  6480: 5040,
};

export const yearPass = [
  {
    quantity: '3',
    price: '1500',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    price: '2760',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    price: '5040',
    serviceName: 'місяців',
  },
];

// ________________Персональні тренування_________________//
export const coachServices = [
  {
    quantity: '1',
    price: '330',
    availability: '1 тренування',
    serviceName: 'тренування',
  },
  {
    quantity: '4',
    price: '1050',
    availability: '15 днів',
    serviceName: 'тренування',
  },
  {
    quantity: '8',
    price: '2000',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    quantity: '12',
    price: '2700',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
];

// ________________Плани тренування/харчування_________________//

export const plans = [
  {
    serviceName: 'План харчування',
  },
  {
    serviceName: 'План тренування',
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
  { quantity: '1', price: '150', serviceName: 'тиждень' },
  { quantity: '30', price: '500', serviceName: 'днів' },
];
export const trainingPlanFullProgram = [
  { quantity: '1', price: '150', serviceName: 'тиждень' },
];
