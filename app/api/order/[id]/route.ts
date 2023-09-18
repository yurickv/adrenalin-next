import { NextRequest } from 'next/server';
import { decodeBasedData } from '@/app/api/_helpers/decodeBasedData';
import { notFound } from 'next/navigation';
import { OrderCookieService } from '@/app/_services/orderCookiesService';

type Params = {
  id: string;
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Params }
) => {
  const orderdata = await req.formData();
  const basedData = orderdata.get('data');

  if (!basedData || !params.id) {
    notFound();
  }
  const data = decodeBasedData(basedData.toString());
  const orderUrl = new URL(`/order/${params.id}`, `${process.env.HOST}`);

  const cookieService = new OrderCookieService();
  cookieService.setOrder(data);
  return Response.redirect(orderUrl);
};
