export const PriceTrener = ({ quantity }: { quantity: number }) => {
  let message = '';
  let mounth = '';

  if (quantity === 1) {
    message = '330';
    mounth = '1 тренування';
  } else if (quantity === 4) {
    message = '1050';
    mounth = '15 днів ';
  } else if (quantity === 8) {
    message = '2000';
    mounth = '1 місяць';
  } else if (quantity === 12) {
    message = '2700';
    mounth = '1 місяць';
  } else {
    message = '';
    mounth = '';
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