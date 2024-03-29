import { CalcTitle } from '@/components/calcs-page/CalcsTitle';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../public/bg-hero.webp';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Прості фітнес калькулятори',
  description:
    'Прості фітнес калькулятори для визначення: індексу маси тіла, проценту жиру в організмі, денної потреби в калоріях',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      'max-snippet': -1,
    },
  },
};

const Calc = () => {
  return (
    <main>
      <section className="relative bg-hero-bg">
        <div className="div-container py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5 z-10 relative">
          <h3 className=" text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Калькулятори</span>
          </h3>
          <h1 className="title mb-14 text-white">Калькулятори</h1>
        </div>
        <Image
          alt="Adrenalin gym foto"
          src={profilePic}
          placeholder="blur"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </section>
      <section className="bg-white dark:bg-darkBody md:pt-8">
        <div className="div-container">
          <CalcTitle />
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-mainTitle dark:text-mainTitleBlack">
            Перевір свою форму просто зараз
          </h2>
          <Image
            src="/fit-blond.webp"
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
