import { BuyButton } from '@/components/service-page/BuyButton';
import { CoachService, PassService } from '@/app/_types/services.types';

type DetailsAndPriceButtons = {
  onClickMore: (name: 'standart' | 'personal' | 'planTrain') => void;
  name: 'standart' | 'personal' | 'planTrain';
  isOpen: boolean;
  chosenProduct?: CoachService | PassService;
};

export const DetailsAndPriceButtons: React.FC<DetailsAndPriceButtons> = ({
  onClickMore,
  name,
  isOpen,
  chosenProduct,
}) => {
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
      <BuyButton quantity={chosenProduct?.price || '200'} appointment={name} />
    </>
  );
};
