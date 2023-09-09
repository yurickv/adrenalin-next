export interface Service {
  quantity: string;
  price: string;
  serviceName: string;
  availability: string;
  amount?: number;
}
export interface newService {
  serviceName: string;
  amount?: number;
  plan: {
    id: string;
    price: string;
    availability: string;
  };
}

export interface CoachService extends Service {
  availability: string;
}

export interface PassService extends Service {
  duration: string;
}
