import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';

const Calc = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div
          className="div-container  
        py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5"
        >
          <h3 className=" text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Калькулятори</span>
          </h3>
          <h1 className="title mb-14 text-white">Калькулятори</h1>
        </div>
      </section>
      <section className="bg-white dark:bg-darkBody md:pt-8">
        <div className="div-container">
          <CalcTitle />
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-mainTitle dark:text-mainTitleBlack">
            Перевір свою форму просто зараз
          </h2>
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
