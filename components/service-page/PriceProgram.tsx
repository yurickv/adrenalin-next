export const PriceTrainingPlan = ({ value }: { value: number }) => {
  let message = '';
  let mounth = '';

  if (value === 2) {
    message = '150';
    mounth = '1 тиждень';
  } else if (value === 8) {
    message = '500';
    mounth = '1 місяць';
  } else {
    message = '200';
    mounth = '1 місяць';
  }

  return (
    <div className="text-center ">
      <p className="text-2xl font-bold text-main">
        {' '}
        &#8372; {message}{' '}
        <span className="text-2xl font-semibold text-mainText">/</span>{' '}
        <span className=" text-base font-semibold text-mainText">{mounth}</span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
