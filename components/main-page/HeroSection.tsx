import Image from 'next/image';
import { Button } from '../Button';

export const HeroSection = () => {
  return (
    <section className=" bg-hero-bg bg-center bg-cover ">
      <div className="div-container-hero">
        <h1 className="sr-only">Тренажерний зал Адреналін</h1>
        {/* <div className="relative sm:w-[217px] sm:h-[22px] md:w-[330px] md:h-[33px] lg:w-[585px] lg:h-[59px]">
          <Image
            src="/ADRENALIN_GYM.png"
            alt="Adrenalin Gym"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div> */}
        <p className="text-lg lg:text-2xl font-poppins lg:w-[845px] text-white flex flex-col">
          Обрахуй свою ідеальну масу тіла за допомогою нашого унікального
          калькулятора!
          <span className="mt-4 md:mt-0 ">
            Наші послуги допоможуть вам досягти мети та підтримувати здоровий
            спосіб життя.
          </span>
        </p>
        <Button
          route="/calcs"
          text="Дізнатися більше"
          width="sm:w-full md:w-[332px] lg:w-[222px]"
        />
      </div>
    </section>
  );
};
