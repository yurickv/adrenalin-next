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
          isOpen
            ? 'bg-gradient-to-l from-main to-hover text-white'
            : 'bg-none text-mainText'
        }
        !border-main border-2 border-solid  opacity-90 rounded-full hover:opacity-100 p-4 text-center 
        block active:bg-primary-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
      >
        {isOpen ? 'Менше' : 'Детальніше'}
      </button>
    </>
  );
};
