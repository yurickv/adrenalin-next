import Image from "next/image";
import { Button } from "../Button";

export const HeroSection = () => {
  return (
    <section className=" bg-hero-bg bg-center bg-cover ">
      <div className="container  flex flex-col gap-11 px-[136px] py-[200px] mx-auto ">
        <h1 className="sr-only">Тренажерний зал Адреналін</h1>
        <Image
          src="/ADRENALIN_GYM.png"
          alt="Adrenalin Gym"
          width={585}
          height={59}
        />
        <p className="text-2xl font-poppins xl:w-[845px] text-white ">
          Обрахуй свою ідеальну масу тіла за допомогою нашого унікального
          калькулятора! Наші послуги допоможуть вам досягти мети та підтримувати
          здоровий спосіб життя.
        </p>
        <Button route="/calcs" text="Дізнатися більше" width="w-[302px]" />
      </div>
    </section>
  );
};