import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../../../public/bg-hero.webp';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { Button } from '@/components/Button';
import { ButtonSecond } from '@/components/ButtonSecond';

const WarmUp = () => {
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
              &gt; <Link href="/learn">Навчання</Link> &gt;{' '}
              <Link href="/learn/training">Тренування</Link> &gt; Розминка
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
        <div className="div-container lg:flex gap-6">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div>
            <h2 className="h1-title-blog p-6 border-b-2 border-main mb-8">
              Розминка
            </h2>
            <p className="h2-list-title">Для чого розминатись: </p>
            <ul className="ul-list">
              <li className="p-text">
                зменшення ризику травм і збільшення працездатності;{' '}
              </li>
              <li className="p-text">
                підготовка м’язів і суглобів, зв'язок до роботи - місцеве
                збільшення кровообігу і температури тих груп які будуть
                безпосередньо працювати, щоб потренуватись на 100%;
              </li>
              <li className="p-text">
                вправи розминки імітують подальшу роботу для налаштування
                психіки в стан підвищеної готовності (концентрації). Для цього
                дехто приймає передтренувальні добавки, а можливо вистарчило б
                якісної розминки.
              </li>
            </ul>
            <h2 className="h2-list-title mt-2">
              Методи вирішення поставлених задач
            </h2>
            <p className="p-text">
              Суглобова розминка – спочатку повільні, а потім швидші рухи з
              максимальною амплітудою. Починаємо з малих суглобів до великих (
              кисті, лікті, плечі, коліна, тазо-бедрені суглоби).
            </p>
            <p className="p-text">
              Обмеження перебування на кардіотренажерах 3-5хв, і то лише при
              подальшому тренуванні ніг. Це розігріє нижню частину тіла і
              серцево-судинну систему.{' '}
            </p>
            <p className="p-text">
              Застосування вправ з власною вагою: віджимання, присідання, нахили
              тулуба та ін. (такі, що імітують подальші вправи з вагою),
              використання фітнес резинок. Активне розтягнення м’язів, які
              будуть в подальшому тренуватись.
            </p>
            <p className="p-text">
              При роботі з досить великими робочими вагами (50% - 100% і більше
              від власної ваги) обов'язково зробити 1-2 розігрівочних підходи з
              вдвічі меншою вагою.
            </p>
            <h2 className="h2-list-title mt-2">
              Розглянемо деякі додаткові специфічні види розминки при конкретних
              вправах:
            </h2>
            <ul className="ul-list">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  При жимах лежачи і під кутом:{' '}
                </span>
                Розтягнення фітнес резинки (легкої) на витягнутих руках перед
                собою, також закинутої за спину. Віджимання від лавки/підлоги.
                Розтягнення грудного відділу - прогин назад корпусом стоячи або
                лежачи на спеціальному масажному валику.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  При різноманітних тягах на себе:{' '}
                </span>
                Суглобова розминка поперекового, грудного (вигинання спиною
                назад), шийного відділів. Гіпересктензії та боковий прес в
                легкому режимі. Розтягнення грудних м'язів. Тримаючи фітнес
                резинку (або бодібар) перед собою на витягнутих руках піднімаємо
                і опускаємо за спину, стараючись не згинати руки в ліктях.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  При вправах для нижньої частини тіла:{' '}
                </span>
                Можна 3-5 хв. велотренажера, орбітрека чи доріжки (швидка ходьба
                - але НЕ біг). Суглобова розминка поперекового, грудного
                відділу, також коліннних, тазобедрених суглобів і стопи.
                Присідання, довгі випади вперед та/або в сторони без ваги. При
                становій тязі для розминки: гіперекстензія, сумо-підйоми (ноги
                значно ширше плечей, руками тримаємось за взуття і не відриваючи
                їх присідаємо - встаємо).
              </li>
            </ul>
            <Image
              src="/fotoLearning/warm-up.webp"
              alt="man warm up in the gym"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg"
              width={500}
              height={300}
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main">
              <ButtonSecond route="/learn/intro" text="&#10094; ПОПЕРЕДНЯ" />
              <Button
                route="/learn/training/basic-exercises"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default WarmUp;
