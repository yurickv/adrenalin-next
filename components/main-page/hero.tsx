import Image from "next/image";
import { Button } from "../Button";

export const Hero = () => {
  return (
    <section className="bg-hero-bg">
      <div className="container  flex flex-col gap-11 px-[136px] py-[200px]">
        <h1 className="sr-only">Тренажерний зал Адреналін</h1>
        {/* <Image
          src="../../public/ADRENALIN_GYM.png"
          alt="Adrenalin Gym"
          width={585}
          height={59}
        /> */}
        <p className="text-2xl font-poppins xl:w-[845px]">
          Обрахуй свою ідеальну масу тіла за допомогою нашого унікального
          калькулятора! Наші послуги допоможуть вам досягти мети та підтримувати
          здоровий спосіб життя.
        </p>
        <Button type="button" text="Дізнатися більше" width="302px" />
      </div>
    </section>
  );
};
