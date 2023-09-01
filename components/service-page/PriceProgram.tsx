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
    <div className="text-left ">
      <p className="text-2xl font-semibold">
        {' '}
        &#8372; {message} <span className="text-2xl ont-semibold">/</span>{' '}
        <span className=" text-base font-semibold">{mounth}</span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
