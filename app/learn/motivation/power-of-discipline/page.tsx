import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';

const PowerOfDiscipline = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5">
          <h3 className="text-left text-mainTitleBlack flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold">
              {' '}
              &gt; Навчання &gt; Мотивація &gt; Сила дисципліни
            </span>
          </h3>
          <h1 className="title mb-14 text-mainTitleBlack">
            Посібник для початківців
          </h1>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
        <div className="div-container lg:flex gap-6">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div>
            <h2 className="h1-title-blog p-6 border-b-2 border-main mb-8">
              Сила дисципліни
            </h2>

            <h2 className="h2-list-title mt-2 text-center">
              Ми ще працюємо над цією сторінкою
            </h2>
            <Image
              src="/fotoLearning/happy-female.webp"
              alt="happy-female"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default PowerOfDiscipline;
