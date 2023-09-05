import { CoachService, PassService } from '@/app/_types/services.types';
import { ModalForBuy } from './ModalForBuy';

type DetailsAndPriceButtons = {
  onClickMore: (name: 'standart' | 'personal' | 'planTrain') => void;
  name: 'standart' | 'personal' | 'planTrain';
  isOpen: boolean;
  chosenProduct?: CoachService | PassService;
  onToggleModal: () => void;
  isModalOpen: boolean;
};

export const DetailsAndPriceButtons: React.FC<DetailsAndPriceButtons> = ({
  onClickMore,
  name,
  isOpen,
  chosenProduct,
  isModalOpen,
  onToggleModal,
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
      <button
        type="button"
        onClick={onToggleModal}
        className="bg-gradient-to-r w-full from-red-500 to-orange-500 cursor-pointer hover:from-red-600
      hover:to-orange-600 focus:from-red-600 focus:to-orange-600
      rounded-full p-4 text-white text-center block active:bg-primary-700
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
      shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        Купити
      </button>
      <ModalForBuy
        onToggleModal={onToggleModal}
        isModalOpen={isModalOpen}
        chosenProduct={chosenProduct}
        name={name}
      />
    </>
  );
};
