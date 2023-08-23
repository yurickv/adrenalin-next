import Image from 'next/image';
import { Button } from '../Button';
import { serviceCardInfo } from '@/const';

export const ServiceCardMain = () => {
  return (
    <>
      {serviceCardInfo.map(({ alt, src, title, text }) => (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-3 md:w-[calc((100%-48px)/3)] xl:max-w-[563px] text-center grow">
          <div className="">
            <Image src={src} alt={alt} width={100} height={150} />
          </div>
          <div className="p-6 grow">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
              {text}
            </p>
            <Button
              route="/services"
              text="Дізнатися більше"
              width="inline-block"
            />
          </div>
        </div>
      ))}
    </>
  );
};
