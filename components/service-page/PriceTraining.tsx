export const PriceTraining = ({
  duration,
  price,
}: {
  duration: string;
  price: number;
}) => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-main dark:text-[#F15C44]">
        {' '}
        &#8372; {price}{' '}
        <span className="text-2xl font-semibold text-mainText dark:text-mainTextBlack">
          /
        </span>{' '}
        <span className="text-base font-semibold text-mainText dark:text-mainTextBlack">
          {duration}
        </span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
