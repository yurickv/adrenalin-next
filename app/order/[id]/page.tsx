import { notFound } from 'next/navigation';
import { OrderCookieService } from '@/app/_services/orderCookiesService';

import { BackLinks } from '@/components/order/BackLinks';
import Image from 'next/image';

const OrderConfirmation = ({ params }: { params: { id: string } }) => {
  const orderService = new OrderCookieService();
  const order = orderService.getOrder();

  if (!order || order.order_id !== params.id) {
    return notFound();
  }

  const isPaymentSuccessful = order.status === 'success';

  return (
    <>
      {isPaymentSuccessful ? (
        <main>
          <section className="bg-[#BEDFFF]">
            <div
              className="div-container  mx-auto bg-pay-bg bg-cover min-[500px]:bg-contain bg-no-repeat bg-center 
        py-[40px] md:py-[44px] lg:py-[88px] min-h-[400px] min-[550px]:min-h-[500px] md:min-h-[600px] text-center 
        text-mainTitle"
            >
              <Image
                src="/pay_ok.png"
                width={24}
                height={24}
                alt="Success payment"
                className="block mx-auto"
              />
              <h1 className="text-2xl font-semibold">Оплата успішна</h1>
              <p>
                чекаємо вас у залі,{' '}
                <span className="uppercase">{order.sender_first_name}</span>
              </p>
              <BackLinks
                isPaymentSuccessful={isPaymentSuccessful}
                orderId={order.order_id}
              />
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="bg-[#BEDFFF]">
            <div
              className="div-container  mx-auto bg-pay-bg bg-cover min-[500px]:bg-contain bg-no-repeat bg-center 
        py-[40px] md:py-[44px] lg:py-[88px] min-h-[400px] min-[550px]:min-h-[500px] md:min-h-[600px] text-center 
        text-mainTitle "
            >
              <Image
                src="/payment_bad.png"
                width={24}
                height={24}
                alt="Failure payment"
                className="block mx-auto"
              />
              <h1 className="text-2xl font-semibold">
                Упс, щось пішло не так,
              </h1>
              <p>
                {' '}
                спробуйте ще раз,{' '}
                <span className="uppercase">{order.sender_first_name}</span>
              </p>
              <BackLinks
                isPaymentSuccessful={isPaymentSuccessful}
                orderId={order.order_id}
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
};
export default OrderConfirmation;
