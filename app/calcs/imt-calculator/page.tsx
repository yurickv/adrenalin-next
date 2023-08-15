import { ButtonGroup } from '@/components/calcs-page/ButttonGroup';
import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { DescriptionIMT } from '@/components/calcs-page/DescriptionIMT';
import { ImtCalcList } from '@/components/calcs-page/ImtCalcList';

const ImtCalc = () => {
  return (
    <main>
      <section className="mb-20">
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center">
          <h1 className="sr-only">
            Калькулятор для визначеення індексу маси тіла
          </h1>
          <h3 className="my-11 text-left">
            Головна сторінка Adrenalin_gym{' '}
            <span className="font-semibold">
              {' '}
              &gt; Калькулятори &gt; Індекс маси тіла
            </span>
          </h3>
          <h1 className="title mb-14">Калькулятори</h1>
          <CalcTitle page={0} />
          <p className="font-bold text-lg my-12">
            Для отримання розрахунку переміщуйте мишкою повзунок на лінії, або
            введіть дані вручну
          </p>
          <div className="flex gap-6 justify-between">
            <div className="p-12 bg-background flex flex-col w-[473px] text-center ">
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
