import { cookies } from 'next/headers';

type Order = {
  data: { [key: string]: string | undefined };
};
export class OrderCookieService {
  constructor() {}

  setOrder(order: Order) {
    cookies().set(
      process.env.NEXT_PUBLIC_ORDER || process.env.ORDER!,
      JSON.stringify(order)
    );
  }
  getOrder() {
    const order = cookies().get(
      process.env.NEXT_PUBLIC_ORDER || process.env.ORDER!
    );
    if (order) {
      return JSON.parse(order.value);
    }
  }
  deleteOrder() {
    cookies().delete(process.env.NEXT_PUBLIC_ORDER || process.env.ORDER!);
  }
}
