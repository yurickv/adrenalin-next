import { Button } from '../Button';

type ButtonForPriceProps = {
  onClickMore: (name: 'standart' | 'personal' | 'planTrain') => void;
  name: 'standart' | 'personal' | 'planTrain';
  isOpen: boolean;
  value?: number;
};

export const ButtonForPrice: React.FC<ButtonForPriceProps> = ({
  onClickMore,
  name,
  isOpen,
  value,
}) => {
  let appointment = '';
  let quantity = 0;

  if (value === 2) {
    quantity = 150;
    appointment = 'План харчування на 1 тиждень';
  } else if (value === 8) {
    quantity = 500;
    appointment = 'План харчування на 1 місяць';
  } else {
    quantity = 200;
    appointment = 'Програма тревувань 1 місяць';
  }

  return (
    <>
      <button
        onClick={() => onClickMore(name)}
        className={`mx-auto mt-4  ${
          isOpen ? ' from-from-orange-200 to-yellow-100 text-main' : ''
        } border-main border-2 border-solid bg-gradient-to-r 
      hover:from-orange-200 hover:to-yellow-100 focus:from-orange-200 focus:to-yellow-100 
      text-mainText hover:text-main focus:text-main
      rounded-full p-4  text-center block 
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      shadow-[0_4px_9px_-4px_#3b71ca]`}
      >
        {isOpen ? 'Менше' : 'Детальніше'}
      </button>
      <button
        className={`bg-gradient-to-r from-red-500 to-orange-500  hover:from-red-600
      hover:to-orange-600 focus:from-red-600 focus:to-orange-600
      rounded-full p-4 text-white text-center block active:bg-primary-700 
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      shadow-[0_4px_9px_-4px_#3b71ca] `}
      >
        Оплатити
      </button>
    </>
  );
};
