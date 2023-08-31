import type { Metadata } from 'next';
import { ButtonGroup } from '@/components/calcs-page/ButttonGroup';
import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { CaloriesCalcList } from '@/components/calcs-page/CaloriesCalcList';
import { CaloriesDescription } from '@/components/calcs-page/CaloriesDescription';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Калькулятор калорій',
  description: 'Обрахуй необхідну для себе кількість калорій',
};
const CaloriesCalc = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover">
        <div
          className="div-container  
        py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5"
        >
          <h2 className="sr-only">
            Калькулятор для визначення денної потреби калорій
          </h2>
          <h3 className=" text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <Link
              href="/calcs"
              className="flex gap-2 items-center font-semibold"
            >
              <span className="sr-only md:not-sr-only">&gt; Калькулятори</span>
            </Link>
            <span className="font-semibold"> &gt; Потреба калорій</span>
          </h3>
          <h1 className="title mb-14 text-white">Калькулятори</h1>
        </div>
      </section>
      <section className="">
        <div className="div-container  py-[20px] md:py-[44px]  mx-auto text-center">
          <CalcTitle page={2} />
          <p className="font-bold text-base md:text-lg my-10 md:my-12">
            Для отримання розрахунку переміщуйте мишкою повзунок на лінії, або
            введіть дані вручну
          </p>
          <div className="flex flex-col items-center md:items-start md:block min-[1028px]:flex min-[1028px]:flex-row gap-10 md:gap-6 justify-between lg:justify-evenly">
            <div className="p-12 bg-background flex flex-col max-w-[500px] text-center basis-1/2 float-left max-h-[960px] md:mr-6 md:mb-6">
              <CaloriesCalcList />
              <ButtonGroup />
            </div>
            <CaloriesDescription />
          </div>
        </div>
      </section>
    </main>
  );
};
export default CaloriesCalc;
