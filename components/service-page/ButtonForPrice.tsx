type ButtonForPriceProps = {
  onClickMore: (name: 'standart' | 'personal' | 'planTrain') => void;
  name: 'standart' | 'personal' | 'planTrain';
  isOpen: boolean;
};

export const ButtonForPrice: React.FC<ButtonForPriceProps> = ({
  onClickMore,
  name,
  isOpen,
}) => {
  return (
    <>
      <button
        onClick={() => onClickMore(name)}
        className={`mx-auto mt-4  ${
          isOpen ? ' from-red-500 to-orange-500 text-white' : ''
        } border-main border-2 border-solid bg-gradient-to-r 
      hover:from-red-500 hover:to-orange-500 focus:from-red-500 focus:to-orange-500 
      text-mainText hover:text-white focus:text-white
      rounded-full p-4  text-center block 
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      shadow-[0_4px_9px_-4px_#3b71ca]`}
      >
        {isOpen ? 'Менше' : 'Детальніше'}
      </button>
    </>
  );
};
