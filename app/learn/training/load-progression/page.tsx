import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../../../public/bg-hero.webp';

import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const LoadProgression = () => {
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
              <Link href="/learn/training">Тренування</Link> &gt; Прогрес
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
              Прогресія навантаження
            </h2>

            <p className="p-text">
              В процесі регулярних тренувань{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack ">
                наше тіло пристосовується до певних навантажень
              </span>{' '}
              і ми стаємо сильнішими, витривалішими і більш підкачаними (якщо
              достатньо їли), покращується техніка виконання вправ (ми
              сподіваємось на це). Тіло вчиться тратити менше енергії і менше
              травмуються тканини м’язів (при силовому тренінгу в тканинах
              м’язів стаються мікророзриви, які відбудовуються і м’язове волокно
              стає товстішим).{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack ">
                Відповідно старі вправи і навантаження вже не дають того стимулу
                для розвитку. Тому необхідна періодична зміна навантаження
              </span>{' '}
              (програм тренувань, робочих ваг і об’ємів навантажень, тощо) при
              тренуваннях в тренажерному залі.
            </p>
            <p className="p-text">
              Ще раз уточнимо{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack ">
                як і чому ростуть м’язи?
              </span>{' '}
              Це результат пристосування тіла до тренувань через відновлення
              мікро розривів м’язових волокон (потрібне поступове збільшення
              силового навантаження, зміна вправ) і через накопичення більше
              енергетичних сполук в м’язах для роботи (збільшення об’єму роботи,
              тобто поступове збільшення підходів, кількості вправ на цільовий
              м’яз).
            </p>
            <Image
              src="/fotoLearning/smiling-sportsman-with-barbell.webp"
              alt="smiling sportsman with barbell"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <h3 className="h2-list-title mt-4 text-center">
              Що можна і треба періодично змінювати в своїх тренуваннях у
              спортзалі?
            </h3>
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Програму тренувань
                </span>{' '}
                – змінюємо вправи на цільові м’язи, кількість повторів,
                комбінації вправ. На початку тренувань програму міняємо раз на
                місяць (зазвичай тренується все тіло за 1 тренування).
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Збільшення робочої ваги
                </span>{' '}
                – найпростіший метод збільшення інтенсивності (навантаження)
                тренування. Пам’ятайте про техніку – виконуючи правильно ви
                краще прокачуєте м’яз (це головне) і не травмуєтесь.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Зміна кількості повторів.
                </span>{' '}
                Ще один простий спосіб прогресії в спортзалі. Розрізняють
                силовий режим роботи 4-6 повторів, масонаборний 10-12 і
                тренування витривалості 15-20 повторів.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Збільшення кількості підходів.
                </span>{' '}
                Оптимально 3-4 підходи однієї вправи. Цього достатньо, щоб дати
                м’язу стимул до росту. При тривалих заняттях в тренажерному залі
                (від півроку, рік) на цільовий м’яз роблять вже по дві – три
                вправи.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Ускладнення вправи.
                </span>{' '}
                Вправи на тренажерах і з власною вагою досить прості і дають
                відносно м’яке навантаження (оптимально використовувати на
                початку тренувань, після травм або для того щоб «добити» м’яз
                після основного тренування). Вправи з вільними вагами – з
                гантелями вже складніші для тіла і дають більше навантаження.
                Відповідно вправи з штангою дозволяють працювати з ще більшими
                вагами і максимально навантажують тіло. В цьому моменті
                тренажерний зал має велику перевагу над тренування вдома.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Зміна порядку виконання вправ.
                </span>{' '}
                На перших 1-2 вправах ми можемо викластись максимально, особливо
                якщо виконується пару вправ на один м’яз підряд, то другу вправу
                зробити буде вже значно важче, бо м’яз вже втомлений. Також сюди
                можна віднести{' '}
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack ">
                  Комбіновані сети вправ (суперсети)
                </span>{' '}
                - комбіновані сети, це коли виконується по черзі підхід однієї
                вправи, а потім підхід іншої вправи ( з перервою між ними або
                без). Можна виділити 3 основні види супер сетів:
                <ul className="ul-list">
                  <li className="p-text">
                    вправи на м’язи антагоністи (протилежні м’язи) – біцепс –
                    тріцепс, середина спини – груди, низ спини – плечі, передня
                    поверхня стегна – задня поверхня. Дуже крутий прийом – при
                    роботі одного м’язу, його антагоніст змушений розтягуватись
                    і розслабляється. Корисний для розвитку сили (якої так не
                    вистачає початківцям). Дозволяє швидше відновлюватись між
                    підходами.
                  </li>
                  <li className="p-text">
                    Вправи на один і той самий м’яз. Дозволяє ще сильніше
                    втомити м’яз. Зазвичай робиться без перерви або з малим
                    часом між підходами. Корисний для бувалих.
                  </li>
                  <li className="p-text">
                    Вправи на різні групи ( наприклад віджимання і присідання).
                    Гарно допомагає при зниженні ваги: назважаючи на повноцінний
                    відпочинок між підходами організму важко пристосуватись до
                    різнонаправлених вправ.
                  </li>
                </ul>
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Довгострокова періодизація тренувань.
                </span>{' '}
                <ul className="ul-list">
                  <li className="p-text">
                    1-й період підготовчий – 2-4 тижні тренувань новачка, коли
                    ваше тіло вчиться техніки вправ і стає витривалішим. В цьому
                    періоді особливо рекомендуємо звернутись до досвідченого
                    товариша, а краще{' '}
                    <Link
                      href="/services#coach-training"
                      className="underline underline-offset-4 font-semibold text-mainTitle dark:text-mainTitleBlack"
                    >
                      тренера в спортзалі.
                    </Link>{' '}
                    Повтори в сетах – 10-15.
                  </li>
                  <li className="p-text">
                    2 період – 2-3 місяці. Масонаборний (для хлопців) і
                    коректуючий, тобто зміна пропорції тіла (зменшення лишнього
                    жиру, підтягнення і акцентоване тренування відстаючих
                    м’язів). Повтори в сетах – 10-12. Поступове збільшення
                    об’єму тренувань (кількості підходів і повторів на окремий
                    м’яз).
                  </li>
                  <li className="p-text">
                    Силовий період – 2-3 місяці. Збільшення максимальної сили.
                    Основна увага на базові вправи (задіюють багато м’язів) –
                    жими штанги, різні тяги, присідання з штангою , станова
                    тяга. Повтори в сетах – 4-6 для силових вправ. Для
                    доповнюючих вправ 8-10 повторів. Чергування силових тижнів з
                    об’ємними (вправи виконуються з середньою вагою, але по
                    10-12 повторів).
                  </li>
                  <li className="p-text">
                    Метаболічний період, тривалість 1-2 місяці – збільшення
                    загальної і м’язової витривалості. Зниження жирової маси
                    тіла. Більша кількість вправ, зниження робочих ваг і
                    одночасне збільшення кількості повторів 15-20. Дозволяє
                    м’язам і головне зв’язкам та суглобам «відпочити» від
                    силового періоду.
                  </li>
                </ul>
              </li>
            </ul>
            <Image
              src="/fotoLearning/athletic-male-doing-biceps.webp"
              alt="athletic male doing biceps"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg"
              width={500}
              height={300}
              loading="lazy"
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main">
              <ButtonSecond
                route="/learn/training/basic-exercises"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/nutrition/basics"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LoadProgression;
