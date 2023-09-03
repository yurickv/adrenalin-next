import { CoachService } from '@/app/_types/services.types';

export const PriceTrener = ({ service }: { service: CoachService }) => {
  return (
    <div className="text-left ">
      <p className="text-2xl font-semibold">
        &#8372; {service.price}
        <span className="text-2xl ont-semibold">/</span>
        <span className=" text-base font-semibold">{service.availability}</span>
      </p>
    </div>
  );
};
