import { newService } from '@/app/_types/services.types';

export const PriceTrener = ({ service }: { service: newService }) => {
  return (
    <div className="text-center ">
      <p className="text-mainText dark:text-mainTextBlack line-clamp-1">
        <span className="text-2xl font-bold text-main dark:text-[#F15C44]">
          &#8372; {service.plan.price}{' '}
        </span>
        <span className="text-2xl font-semibold text-mainText dark:text-mainTextBlack">
          /
        </span>{' '}
        <span className=" text-base font-semibold text-mainText dark:text-mainTextBlack">
          {service.plan.availability}
        </span>
      </p>
      <p className="text-base">{}</p>
    </div>
  );
};
