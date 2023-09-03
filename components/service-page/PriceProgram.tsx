export const PriceTrainingPlan = ({
  duration,
  price,
}: {
  duration: string;
  price: string;
}) => {
  return (
    <div className="text-center ">
      <p className="text-2xl font-bold text-main">
        {' '}
        &#8372; {price} <span className="text-2xl font-semibold text-mainText">/</span>{' '}
        <span className=" text-base font-semibold text-mainText">{duration}</span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
