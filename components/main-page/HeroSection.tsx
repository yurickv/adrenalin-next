import { Button } from '../Button';
import FadeIn from '@/components/FadeIn';

export const HeroSection = () => {
  return (
    <section className=" bg-hero-bg bg-center bg-cover ">
      <div className="div-container-hero">
        <FadeIn>
          <h1 className="sr-only">Тренажерний зал Адреналін</h1>
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
            width="w-full md:w-[332px] lg:w-[222px]"
          />
        </FadeIn>
      </div>
    </section>
  );
};
