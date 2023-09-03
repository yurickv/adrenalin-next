export const PriceTraining = ({
  duration,
  price,
}: {
  duration: string;
  price: number;
}) => {
  return (
    <div className="text-left ">
      <p className="text-2xl font-semibold">
        {' '}
        &#8372; {price} <span className="text-2xl ont-semibold">/</span>
        <span className=" text-base font-semibold">{duration}</span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
