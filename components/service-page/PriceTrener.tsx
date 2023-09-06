import { CoachService } from '@/app/_types/services.types';

export const PriceTrener = ({ service }: { service: CoachService }) => {
  return (
    <div className="text-center ">
      <p className="text-2xl font-bold text-main dark:text-[#F15C44]">
        &#8372; {service.price}{' '}
        <span className="text-2xl font-semibold text-mainText dark:text-mainTextBlack">
          /
        </span>{' '}
        <span className=" text-base font-semibold text-mainText dark:text-mainTextBlack">
          {service.availability}
        </span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
