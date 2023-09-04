import Link from 'next/link';
import { PlanIcon } from '../icons/forServiceCard/PlanIcon';
import { TrenerIcon } from '../icons/forServiceCard/TrenerIcon';
import { BarbellForService } from '../icons/forServiceCard/BarbellForService';

export const ServiceCardMain = () => {
  return (
    <>
      <Link
        href="/services"
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 group
          pt-6 px-3 md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center grow"
      >
        <div className="p-3 rounded-full bg-orange-100 group group-hover:bg-white group-hover:text-main mx-auto inline-block">
          <BarbellForService />
        </div>

        <div className="p-6 grow md:flex md:flex-col justify-between">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-mainTitle 
           min-h-[50px] group-hover:text-main"
          >
            Тренування
          </h5>
          <p className=" text-base text-mainText">
            Тренування на професійному обладнанні в просторому тренажерному залі
            Адреналін
          </p>
        </div>
      </Link>
      <Link
        href="/services"
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 group
          pt-6 px-3 md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center grow max-[767px]:mt-4"
      >
        <div className="p-3 rounded-full bg-orange-100 group group-hover:bg-white group-hover:text-main mx-auto inline-block">
          <TrenerIcon />
        </div>

        <div className="p-6 grow">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-mainTitle 
           min-h-[50px] group-hover:text-main"
          >
            Тренування з тренером
          </h5>
          <p className=" text-base text-mainText">
            Передаємо Вам кращий досвід і практики для максимально швидкого
            результату
          </p>
        </div>
      </Link>
      <Link
        href="/services"
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 group
          pt-6 px-3 md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center grow max-[767px]:mt-4"
      >
        <div className="p-3 rounded-full bg-orange-100 group group-hover:bg-white group-hover:text-main mx-auto inline-block">
          <PlanIcon />
        </div>
        <div className="p-6 grow">
          <h5 className="mb-2 text-xl font-medium leading-tight text-mainTitle  min-h-[50px] group-hover:text-main">
            План харчування / тренування
          </h5>
          <p className=" text-base text-mainText">
            План харчування / тренування, із врахуванням Вашого віку, ваги і
            мети
          </p>
        </div>
      </Link>
    </>
  );
};
