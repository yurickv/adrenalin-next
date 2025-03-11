import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import SceletonForCalc from '@/components/sceleton/sceletonForCalc';

export default function Loading() {
  return (
    <>
      <section className="bg-gray-300 bg-center bg-cover ">
        <div
          className="div-container  
        py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5 md:gap-10 z-10 relative"
        >
          <h2 className="sr-only">
            Калькулятор для визначення денної потреби калорій
          </h2>
          <h3 className=" text-left text-mainTitleBlack flex gap-2">
            <div className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </div>
            <div className="flex gap-2 items-center font-semibold">
              <span className="sr-only md:not-sr-only">&gt; Калькулятори</span>
            </div>
            <span className="font-semibold"> &gt; Потреба калорій</span>
          </h3>
          <h1 className="title mb-14 text-mainTitleBlack">Калькулятори</h1>
        </div>
      </section>
      <section className="bg-white dark:bg-darkBody">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center">
          <SceletonForCalc />
        </div>
      </section>
    </>
  );
}
