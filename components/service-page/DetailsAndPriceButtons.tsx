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
          isOpen ? ' bg-orange-200 dark:bg-[#d4d4d4] text-main' : ''
        } bg-orange-100 hover:bg-orange-200 dark:bg-[#a3a3a3] dark:hover:bg-[#d4d4d4]
      text-mainText dark:text-mainTitle
      rounded-full p-4  text-center w-full    `}
      >
        {isOpen ? 'Менше' : 'Детальніше'}
      </button>
      <BuyButton quantity={chosenProduct?.price || '200'} appointment={name} />
    </>
  );
};
