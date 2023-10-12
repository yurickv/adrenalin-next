import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../Sidebar';

const Intro = () => {
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
              &gt; <Link href="/learn">Навчання</Link> &gt; Вступ
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
            <h1 className="h1-title-blog p-6 border-b-2 border-main mb-8">
              Вступ
            </h1>
            <p className="p-text">
              Наше тіло створене для фізичних навантажень, для того щоб ми могли
              взаємодіяти із світом. І ще років так 100 назад щоденне життя було
              сповнене різних фізичних навантажень, банально щоб випити чаю
              зранку потрібно було нарубати дров, принести їх і розпалити
              вогонь.{' '}
            </p>
            <p className="p-text">
              Зараз технічний прогрес полегшив наше з вами життя (вчені кажуть в
              10 раз), але людське тіло за 100 кардинально не змінилось і все
              так само створене для фізичних навантажень і здатне
              пристосовуватись до них.{' '}
            </p>
            <p className="p-text">
              А що буде, якщо не давати тілу фізичних вправ (вести малорухливий,
              сидячий спосіб життя)? – тіло ослабне, м’язи зменшаться, почнуться
              застійні процеси, що з часом призведе до хвороб.
            </p>
            <p className="p-text !font-semibold text-mainTitle dark:text-mainTitleBlack">
              Взагалі наша фізична форма – це результат пристосування до
              фізичних навантажень і харчування. Тобто це динамічна (постійно
              змінна) величина.
            </p>
            <p className="p-text">
              Все досить просто – хочеш виглядати як спортсмен – живи як
              спортсмен (тренування і харчування). Як добре, що для просто
              гарної фізичної форми не потрібно пахати як спортсмен). Для цього
              достатньо 3 рази в тиждень по 1 год. - регулярні тренування
              протягом тривалого часу. Як бонус – ви практично ніколи не будете
              хворіти. Пропонуємо пройти цей шлях з нами.
            </p>
            <p className="p-text">
              Давате зараз почнем шлях до Вашого тіла мрії. Тренування в
              тренажерному залі стоять на трьох китах - основах: власне
              тренування, адекватне харчування і відпочинок. Далі ми про це і
              поговоримо.
            </p>
            <Image
              src="/happy-female.jpg"
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
export default Intro;
