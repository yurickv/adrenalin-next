export const Price = ({
  duration,
  quantity,
}: {
  duration: number;
  quantity: number;
}) => {
  let message = '';
  let mounth = '';
  const value = duration * quantity;

  if (value === 8) {
    message = '440';
    mounth = '1 місяць';
  } else if (value === 12) {
    message = '500';
    mounth = '1 місяць';
  } else if (value === 20) {
    message = '540';
    mounth = '1 місяць';
  } else if (value === 60 || value === 36) {
    message = '1500';
    mounth = '3 місяці';
  } else if (value === 120 || value === 72) {
    message = '2760';
    mounth = '6 місяців';
  } else if (value === 240 || value === 144) {
    message = '5040';
    mounth = '1 рік';
  } else if (value === 1) {
    message = '80';
    mounth = '1 тренування';
  } else {
    message = '';
    mounth = '';
  }

  return (
    <div className="text-center">
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
