export interface Service {
  quantity: string;
  price: string;
  serviceName: string;
  availability: string;
}

export interface CoachService extends Service {
  availability: string;
}

export interface PassService extends Service {
  duration: string;
}
