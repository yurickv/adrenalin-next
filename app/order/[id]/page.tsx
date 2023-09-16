import { notFound } from 'next/navigation';
import { OrderCookieService } from '@/app/_services/orderCookiesService';

import { BackLinks } from '@/components/order/BackLinks';

const OrderConfirmation = ({ params }: { params: { id: string } }) => {
  const orderService = new OrderCookieService();
  const order = orderService.getOrder();

  if (!order || order.order_id !== params.id) {
    return notFound();
  }

  const isPaymentSuccessful = order.status === 'success';

  return (
    <div>
      {isPaymentSuccessful ? (
        <section className="bg-[#BEDFFF])]">
          <div
            className="div-container  mx-auto bg-payment bg-contain bg-no-repeat bg-center 
        py-[40px] md:py-[44px] lg:py-[88px]
      "
          >
            <h1 className="">
              Оплата успішна, чекаємо вас у залі, {order.sender_first_name}
            </h1>
            <BackLinks
              isPaymentSuccessful={isPaymentSuccessful}
              orderId={order.order_id}
            />
          </div>
        </section>
      ) : (
        <>
          <h1>Упс, щось пішло не так, спробуйте ще раз</h1>
          <BackLinks
            isPaymentSuccessful={isPaymentSuccessful}
            orderId={order.order_id}
          />
        </>
      )}
    </div>
  );
};
export default OrderConfirmation;
