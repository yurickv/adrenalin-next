import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../../../public/bg-hero.webp';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const Timidity = () => {
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
              <Link href="/learn/motivation">Мотивація</Link> &gt; Як подолати
              тривожність?
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
              Як подолати тривожність?
            </h2>
            <h3 className="h2-list-title mt-2 text-center">
              Розвиток впевненості: Стратегії подолання тривожності та
              сором'язливості в тренажерному залі
            </h3>
            <p className="p-text">
              Вперше або після тривалої перерви у заняттях у спортзалі може бути
              страшно. Страх осуду, почуття сорому або занепокоєння через
              незнання, з чого почати, можуть викликати тривогу, пов'язану з
              заняттями в спортзалі. Однак будьте певні, що ці емоції є
              поширеними, і існують ефективні стратегії їх подолання. У цій
              статті ми розглянемо деякі техніки, які підвищать вашу впевненість
              у собі та допоможуть вам розпочати свій фітнес-подорож з
              упевненістю у власних силах.
            </p>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Найважче прийти в тренажерний зал.
              </span>{' '}
              Дальше вже просто - входиш в ритм і тренуєшся як всі.
            </p>
            <Image
              src="/fotoLearning/timidity-woman-in-gym.webp"
              alt="timidity woman in gym"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1.Виховуйте себе:
                </span>{' '}
                Знання - це сила. Знайдіть час, щоб дізнатися про тренажери,
                вправи та правильну форму їх виконання. Розуміння того, що ви
                робите, додасть вам впевненості під час тренувань. Не соромтесь
                запитати допомоги в{' '}
                <Link
                  href="/services"
                  className="underline underline-offset-4 font-semibold text-mainTitle dark:text-mainTitleBlack"
                >
                  тренера
                </Link>{' '}
                – це його робота. Взагалі робота з тренером це найшвидший спосіб
                досягнути своєї мети - не потрібно вчитись на своїх помилках.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2.Починайте повільно і прогресуйте поступово:{' '}
                </span>
                Починайте з вправ, які вам легко даються, і поступово додавайте
                нові, коли станете більш впевненими у собі. Робіть маленькі
                кроки і святкуйте кожне досягнення, і з часом ви станете більш
                впевненими у собі. Персональні тренування з тренером здатні
                значно пришвидшити ваш прогрес (бо тренер вже знає, як підібрати
                адекватне тренування).
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Візьміть з собою друга для тренувань:{' '}
                </span>
                Подумайте про те, щоб попросити друга або члена сім'ї
                приєднатися до вас у спортзалі. Наявність партнера по тренуванню
                в тренажерному залі може забезпечити відчуття підтримки та
                товариства, що зробить заняття менш лякаючими.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Обирайте непікові години:{' '}
                </span>
                Якщо ви боїтеся переповнених спортзалів, відвідуйте їх у
                непікові години, коли там менше людей (зранку до 16-ї та ввечері
                після 19-ї). Це може створити більш розслаблену обстановку, щоб
                ви могли зосередитися на тренуванні.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Використовуйте навушники та музику:{' '}
                </span>
                Прослуховування улюбленої музики може допомогти створити
                позитивну та мотивуючу атмосферу. Навушники також можуть
                створити відчуття приватності, дозволяючи вам зосередитися на
                тренуванні, не відволікаючись на сторонні речі.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Зосередьтеся на собі, а не на інших:{' '}
                </span>
                Пам'ятайте, що кожен у спортзалі зосереджений на своєму
                тренуванні. Звільніть себе від відчуття осуду і зосередьтеся на
                власному прогресі та цілях.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Ставте реалістичні очікування:{' '}
                </span>
                Не порівнюйте себе з іншими і не встановлюйте нереалістичних
                стандартів. Прийміть свій унікальний фітнес-шлях і зрозумійте,
                що прогрес є особистим і нелінійним (тобто у вас будуть і злети
                і падіння).
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  8. Візуалізуйте успіх:{' '}
                </span>
                Перед тим, як вирушити до спортзалу, уявіть, як ви впевнено
                завершуєте тренування. Візуалізація може допомогти морально
                підготувати вас до успіху і підвищити впевненість у собі.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  9. Відзначайте свої зусилля:{' '}
                </span>
                Визнайте свою рішучість і наполегливу працю. Відзначайте своє
                прагнення покращити здоров'я та фізичну форму, незалежно від
                результату.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  10. Зосередьтеся на нефізичних перевагах:{' '}
                </span>
                Змістіть фокус з цілей, пов'язаних із зовнішнім виглядом, на
                нефізичні переваги фізичних вправ, такі як збільшення енергії,
                покращення настрою та загального самопочуття.
              </li>
            </ul>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Висновок:{' '}
              </span>
              Подолання тривоги і сором'язливості, пов'язаних із заняттями
              спортом, - це поступовий процес, який вимагає терпіння і співчуття
              до себе. Дозвольте собі бути таким, яким ви є (якщо при цьому ви
              не заважаєте іншим, звичайно). Пам'ятайте, що спортзал - це місце
              для самовдосконалення, і кожен крок, який ви робите на шляху до
              своїх цілей, є свідченням вашої сили та рішучості. Продовжуйте
              рухатися вперед з упевненістю і спостерігайте, як ваша
              фітнес-подорож перетворюється на джерело гордості та натхнення.
            </p>
            <Image
              src="/fotoLearning/group-of-people-after-workout.webp"
              alt="group of people after workout in gym"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/recover/reboot"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/motivation/finding-motivation"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Timidity;
