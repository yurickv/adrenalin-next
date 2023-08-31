import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonGroup } from '@/components/calcs-page/ButttonGroup';
import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { DescriptionIMT } from '@/components/calcs-page/IMTDescription';
import { ImtCalcList } from '@/components/calcs-page/ImtCalcList';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';

export const metadata: Metadata = {
  title: 'Калькулятор ІМТ',
  description: 'Обрахуй свій індекс маси тіла!',
};
const ImtCalc = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover">
        <div
          className="div-container  
        py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5"
        >
          <h2 className="sr-only">
            Калькулятор для визначення індексу маси тіла
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
            <span className="font-semibold"> &gt; Індекс маси тіла</span>
          </h3>
          <h1 className="title mb-14 text-white">Калькулятори</h1>
        </div>
      </section>
      <section>
        <div className="div-container py-[20px] md:py-[44px]  mx-auto text-center">
          <CalcTitle page={0} />
          <p className="font-bold text-base md:text-lg my-10 md:my-12">
            Для отримання розрахунку переміщуйте мишкою повзунок на лінії, або
            введіть дані вручну
          </p>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-6 justify-between">
            <div className="p-12 bg-background flex flex-col max-w-[500px] text-center ">
              <ImtCalcList />
              <ButtonGroup />
            </div>
            <DescriptionIMT />
          </div>
        </div>
      </section>
    </main>
  );
};
export default ImtCalc;
