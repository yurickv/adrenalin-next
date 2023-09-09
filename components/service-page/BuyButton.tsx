import { v4 as uuidv4 } from 'uuid';
import { PaymentService } from '@/app/_services/payment.service';
import { newService } from '@/app/_types/services.types';

type Props = {
  data: {
    agreement: boolean;
    phone: string;
    publicOffer: boolean;
    sender_first_name: string;
    sender_last_name: string;
  };
  products: newService[];
  fullPrice: number;
};
export const BuyButton = ({
  quantity,
  appointment,
  disabled = false,
  text = 'Купити зараз',
  props,
}: {
  quantity?: string;
  disabled?: boolean;
  appointment?: string;
  text?: string;
  props?: Props;
}) => {
  let data;
  if (props) {
    data = {
      public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY!,
      version: '3',
      action: 'pay',
      sender_first_name: props.data.sender_first_name,
      sender_last_name: props.data.sender_last_name,
      amount: props.fullPrice,
      currency: 'UAH',
      result_url: `http://${process.env.NEXT_PUBLIC_HOST || process.env.HOST}`,
      description: `Оплата за ${props.products.reduce((acc, currentValue) => {
        return (acc +=
          `${acc ? ', ' : ' '}` +
          currentValue.serviceName +
          `, кількість: ${currentValue.amount}`);
      }, '')}. Тел:${props.data.phone}`,
      order_id: uuidv4(),
    };
  } else {
    data = {
      public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY!,
      version: '3',
      action: 'pay',
      amount: Number(quantity),
      currency: 'UAH',
      description: 'Payment for services',
      order_id: uuidv4(),
    };
  }
  console.log({
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    HOST: process.env.HOST,
  });
  const paymentService = new PaymentService(data);
  paymentService.createSignature();

  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      className="w-full md:w-[170px] block"
    >
      <input type="hidden" name="data" value={paymentService.getBasedData()} />
      <input
        type="hidden"
        name="signature"
        value={paymentService.getSignature()}
      />
      <button
        type="submit"
        disabled={disabled}
        className="md:!w-[170px] actions__button disabled:opacity-50 bg-orange-gradient text-white hover:from-red-600
      hover:to-orange-600 focus:from-red-600 focus:to-orange-600 block"
      >
        {text}
      </button>
    </form>
  );
};
