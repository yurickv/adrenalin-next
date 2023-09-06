// ________________Абонементи_________________//
export const monthPass = [
  {
    quantity: '1',
    price: '80',
    availability: '1 тренування',
    serviceName: 'тренування',
  },
  {
    quantity: '8',
    price: '440',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    quantity: '12',
    price: '500',
    availability: '1 місяць',
    serviceName: 'тренувань',
  },
  {
    quantity: 'Безліміт',
    price: '540',
    availability: '1 місяць',
    serviceName: '',
  },
];

export const passDuration = [
  {
    quantity: '1',
    availability: '1 місяць',
    serviceName: 'місяць',
  },
  {
    quantity: '3',
    availability: '3 місяці',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    availability: '6 місяців',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    availability: '12 місяців',
    serviceName: 'місяців',
  },
];

export const passVariations: { [key: number]: number } = {
  1620: 1500,
  3240: 2760,
  6480: 5040,
};

export const yearPass = [
  {
    quantity: '3',
    price: '1500',
    availability: '3 місяці',
    serviceName: 'місяці',
  },
  {
    quantity: '6',
    price: '2760',
    availability: '6 місяців',
    serviceName: 'місяців',
  },
  {
    quantity: '12',
    price: '5040',
    availability: '12 місяців',
    serviceName: 'місяців',
  },
];

// ________________Персональні тренування_________________//
export const coachServices = [
  {
    quantity: '1',
    price: '330',
    availability: '1 тренування',
    serviceName: 'тренування з тренером',
  },
  {
    quantity: '4',
    price: '1050',
    availability: '15 днів',
    serviceName: 'тренування з тренером',
  },
  {
    quantity: '8',
    price: '2000',
    availability: '1 місяць',
    serviceName: 'тренувань з тренером',
  },
  {
    quantity: '12',
    price: '2700',
    availability: '1 місяць',
    serviceName: 'тренувань з тренером',
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
