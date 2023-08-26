import { Button } from '../Button';
type ButtonForPriceProps = {
  onClickMore: (name: 'standart' | 'personal' | 'planTrain') => void;
  name: 'standart' | 'personal' | 'planTrain';
};

export const ButtonForPrice: React.FC<ButtonForPriceProps> = ({
  onClickMore,
  name,
}) => {
  return (
    <>
      <button
        onClick={() => onClickMore(name)}
        className="mx-auto mt-4 !bg-none 
        !border-main border-2 border-solid !text-mainText opacity-90 rounded-full hover:opacity-100 p-4 text-center 
        block active:bg-primary-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >
        Детальніше
      </button>
    </>
  );
};

{
  /* 
      <Button
        route="/services"
        text="Придбати програму"
        width="mx-auto mt-4 w-[240px] md:w-[284px]"
      /> */
}
