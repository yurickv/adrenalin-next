import { v4 as uuidv4 } from 'uuid';
import { PaymentService } from '@/app/_services/payment.service';

export const BuyButton = ({
  quantity,
  appointment,
}: {
  quantity: string;
  appointment: string;
}) => {
  const data = {
    public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY!,
    version: '3',
    action: 'pay',
    amount: Number(quantity),
    currency: 'UAH',
    description: 'Payment for services',
    order_id: uuidv4(),
  };
  const paymentService = new PaymentService(data);
  paymentService.createSignature();

  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
    >
      <input type="hidden" name="data" value={paymentService.getBasedData()} />
      <input
        type="hidden"
        name="signature"
        value={paymentService.getSignature()}
      />
      <button
        type="submit"
        className="bg-gradient-to-r w-full from-red-500 to-orange-500 cursor-pointer hover:from-red-600
      hover:to-orange-600 focus:from-red-600 focus:to-orange-600
      rounded-full p-4 text-white text-center block active:bg-primary-700
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
      shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        Купити
      </button>
    </form>
  );
};
