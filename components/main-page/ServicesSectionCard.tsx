import Link from 'next/link';
import { PlanIcon } from '../icons/forServiceCard/PlanIcon';
import { TrenerIcon } from '../icons/forServiceCard/TrenerIcon';
import { BarbellForService } from '../icons/forServiceCard/BarbellForService';

export const ServiceCardMain = () => {
  return (
    <>
      <Link
        href="/services#training"
        className="block rounded-xl bg-white dark:bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 dark:hover:bg-orange-100 group
          pt-6 w-full md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center"
      >
        <div
          className="p-3 rounded-full bg-orange-100 dark:bg-orange-100 group
        dark:group-hover:bg-white group-hover:bg-white group-hover:text-main dark:group-hover:text-main mx-auto inline-block"
        >
          <BarbellForService />
        </div>

        <div className="p-6 md:flex md:flex-col justify-between">
          <h3
            className="mb-2 text-xl font-medium leading-tight text-mainTitle 
           min-h-[50px] group-hover:text-main"
          >
            Тренування
          </h3>
          <p className="text-mainText">
            Тренування на професійному обладнанні в просторому тренажерному залі
            Адреналін
          </p>
        </div>
      </Link>
      <Link
        href="/services#coach-training"
        className="block rounded-xl bg-white dark:bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 dark:hover:bg-orange-100 group
          pt-6 w-full md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center"
      >
        <div
          className="p-3 rounded-full bg-orange-100 dark:bg-orange-100 group
        dark:group-hover:bg-white group-hover:bg-white group-hover:text-main dark:group-hover:text-main mx-auto inline-block"
        >
          <TrenerIcon />
        </div>

        <div className="p-6">
          <h3
            className="mb-2 text-xl font-medium leading-tight text-mainTitle 
           min-h-[50px] group-hover:text-main"
          >
            Тренування з тренером
          </h3>
          <p className="text-mainText">
            Передаємо Вам кращий досвід і практики для максимально швидкого
            результату
          </p>
        </div>
      </Link>
      <Link
        href="/services#program"
        className="block rounded-xl bg-white dark:bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
           hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] hover:bg-orange-100 dark:hover:bg-orange-100 group
          pt-6 w-full md:w-[calc((100%-48px)/3)] xl:max-w-[563px] md:min-h-[344px] lg:min-h-[280px] text-center"
      >
        <div
          className="p-3 rounded-full bg-orange-100 dark:bg-orange-100 group
        dark:group-hover:bg-white group-hover:bg-white group-hover:text-main dark:group-hover:text-main mx-auto inline-block"
        >
          <PlanIcon />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-medium leading-tight text-mainTitle  min-h-[50px] group-hover:text-main">
            План харчування / тренування
          </h3>
          <p className="text-mainText">
            План харчування / тренування, із врахуванням Вашого віку, ваги і
            мети
          </p>
        </div>
      </Link>
    </>
  );
};
