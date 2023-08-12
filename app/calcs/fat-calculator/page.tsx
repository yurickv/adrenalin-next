import { CalcTitle } from '@/components/calcs-page/CalcsTitle';

const FatCalc = () => {
  return (
    <main>
      <section className="">
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center">
          <h3 className="my-11 text-left">
            Головна сторінка Adrenalin_gym{' '}
            <span className="font-semibold">
              {' '}
              &gt; Калькулятори &gt; Відсоток жиру в організмі
            </span>
          </h3>
          <h1 className="title mb-14">Калькулятори</h1>
          <CalcTitle page={1} />
        </div>
      </section>
    </main>
  );
};
export default FatCalc;
