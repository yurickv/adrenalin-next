import { ButtonGroup } from '@/components/calcs-page/ButttonGroup';
import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { CaloriesCalcList } from '@/components/calcs-page/CaloriesCalcList';
import { CaloriesDescription } from '@/components/calcs-page/CaloriesDescription';

const CaloriesCalc = () => {
  return (
    <main>
      <section className="mb-20">
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center">
          <h3 className="my-11 text-left">
            Головна сторінка Adrenalin_gym{' '}
            <span className="font-semibold">
              {' '}
              &gt; Калькулятори &gt; Потреба калорій
            </span>
          </h3>
          <h1 className="title mb-14">Калькулятори</h1>
          <CalcTitle page={2} />
          <p className="font-bold text-lg mb-12 ">
            Для отримання розрахунку переміщуйте мишкою повзунок на лінії, або
            введіть дані вручну
          </p>
          <div className="flex gap-6 justify-between">
            <div className="p-12 bg-background flex flex-col w-[473px] text-center ">
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
