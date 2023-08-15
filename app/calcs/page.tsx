import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import Image from 'next/image';

const Calc = () => {
  return (
    <main>
      <section className="">
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center">
          <h3 className="my-11 text-left">
            Головна сторінка Adrenalin_gym
            <span className="font-semibold"> &gt; Калькулятори</span>
          </h3>
          <h1 className="title mb-14">Калькулятори</h1>
          <CalcTitle />
          <Image
            src="/fit-blond.jpg"
            alt="fit-blond"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
          />
        </div>
      </section>
    </main>
  );
};

export default Calc;
