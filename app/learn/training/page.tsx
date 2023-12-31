import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../../public/bg-hero.webp';
import Link from 'next/link';
import { Sidebar } from '../Sidebar';

const Training = () => {
  const sidebar = 'training';
  return (
    <main>
      <section className="relative bg-hero-bg">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5 md:gap-10 lg:gap-14 z-10 relative">
          <h3 className="text-left text-mainTitleBlack flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold">
              {' '}
              &gt; <Link href="/learn">Навчання</Link> &gt; Тренування
            </span>
          </h3>
          <h1 className="title mb-14 text-mainTitleBlack">
            Навчальний посібник
          </h1>
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
      <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
        <div className="div-container">
          <p className="md:font-semibold text-mainTitle dark:text-mainTitleBlack md:text-lg text-center">
            Давайте пройдемо разом цей шлях до Вашого Ідеального тіла. Виберіть
            тему і застосовуйте отримані знання на практиці.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 mt-8 md:mt-12">
            <div className="w-[280px] mx-auto mt-6">
              <Sidebar />
            </div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full lg:w-[calc((100%-324px))] max-w-[900px] overflow-hidden rounded-lg mx-auto">
              <Image
                src="/fotoLearning/woman-helping-man-at-gym.webp"
                alt="pair-at-the-gym"
                sizes="100vw"
                priority={false}
                loading="lazy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Training;
