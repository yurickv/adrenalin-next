import { OrderCookieService } from '@/app/_services/orderCookiesService';
import { NextRequest, NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

export const DELETE = (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const cookiesService = new OrderCookieService();
  const order = cookiesService.getOrder();

  if (order.order_id !== params.id) {
    notFound();
  }

  cookiesService.deleteOrder();

  return NextResponse.json({ message: 'Success' });
};
