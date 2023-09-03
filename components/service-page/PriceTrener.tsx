import { CoachService } from '@/app/_types/services.types';

export const PriceTrener = ({ service }: { service: CoachService }) => {
  return (
    <div className="text-center ">
      <p className="text-2xl font-bold text-main">
        &#8372; {service.price}{' '}
        <span className="text-2xl font-semibold text-mainText">/</span>{' '}
        <span className=" text-base font-semibold text-mainText">
          {service.availability}
        </span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
