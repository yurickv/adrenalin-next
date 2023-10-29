import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const Overtraining = () => {
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
              &gt; Навчання &gt; Відновлення &gt; Як визначити перетренованість?
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
              Як визначити перетренованість?
            </h2>

            <h2 className="h2-list-title mt-2 text-center">
              Сигнали перетренованості: Важливість розпізнавання Ваших меж
            </h2>
            <p className="p-text">
              Тренування в спортзалі - це шлях до кращої фізичної форми, але
              існує важливий аспект, який необхідно враховувати - це можливість
              перетренування. Визначення перетренованості - це ключ до
              підтримання оптимального фізичного та психічного стану під час
              тренувань. Ось як розпізнати сигнали перетренованості:
            </p>
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Зменшення продуктивності:{' '}
                </span>
                Якщо ви помічаєте, що ваші досягнення на тренуваннях не
                покращуються, а навпаки погіршуються, це може бути ознакою
                перетренованості.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Зростання пульсу в спокої:{' '}
                </span>
                Підвищений пульс у спокої може бути показником перетренованості,
                оскільки серцева система не відновлюється належним чином.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Загальна втома:{' '}
                </span>
                Постійна втома, подразнювання та погіршення сну можуть бути
                ознаками перетренованості.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Погіршення емоційного стану:{' '}
                </span>
                Зміни в емоційному стані, такі як депресія, тривожність та
                подразнювання, можуть бути пов'язані з перетренованістю.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Постійні травми :{' '}
                </span>
                Підвищене ризик травм під час тренувань може вказувати на
                надмірну навантаженість.
              </li>
            </ul>
            <h2 className="h2-list-title mt-4 text-center">
              Якщо ви помітили ці симптоми, важливо негайно вжити заходи:
            </h2>
            <ul className="ul-list">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  Відпочинок:{' '}
                </span>
                Дайте своєму тілу час для відновлення. Поставте тренування на
                паузу.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  Перегляд Харчування:{' '}
                </span>
                Переконайтеся, що ваш раціон належним чином збалансований і
                відповідає потребам вашого організму.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  Сон:{' '}
                </span>
                Надайте своєму організму достатньо часу для відновлення під час
                сну, не менше 8год. А на період відновлення можна постапи і
                довше 10-12год.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  Зниження навантаження:{' '}
                </span>
                Зменшіть інтенсивність (знизіть робочі ваги, змініть вправи на
                легші) та тривалість тренувань (зменшіть кількість вправ).
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  Пошук Підтримки:{' '}
                </span>
                Консультуйтеся з фахівцем, таким як тренер чи лікар, якщо
                симптоми перетренованості тривають.
              </li>
            </ul>
            <h2 className="h2-list-title mt-4 text-center">
              Тест Руф'є-Діксона{' '}
            </h2>
            <p className="p-text">
              Тест Руф'є-Діксона - це простий спосіб для оцінки рівня втоми
              спортсмена, також показує як швидко серце відновлюється після
              інтенсивного фізичного навантаження. Як правило, якщо людина
              перевантажує себе на тренуваннях, то показник тесту падає
              буквально на очах.
            </p>
            <p className="p-text">
              Для проведення тесту потрібний секундомір. Для початку порахуйте
              пульс в спокійному стані за 15 сек.( в формулі це значення Р1).
              Потім зробіть 30 присідань за 30 сек. І одразу знову виміряйте
              пульс (в формулі це Р2). Через 1 хвилину знову міряємо пульс за 15
              сек. (в формулі це дорівнює Р3).{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Рахуємо індекс по формулі: Index = (4 *(P1 + P2 + P3) - 200) /
                10
              </span>
            </p>
            <p className="p-text">
              Index &#10094; 0 - ви в чудовій формі!;
              <br />0 &#10094; Index &#10095; 3 - дуже хороша форма;
              <br />3 &#10094; Index &#10095; 6 - хороша форма;
              <br />6 &#10094; Index &#10095; 10 - задовільна форма;
              <br />
              10 &#10094; Index &#10095; 14 - погана фіз.форма;
              <br />
              14 &#10094; Index - ви труп!
            </p>
            <p className="p-text">
              Тест Руф'є-Діксона рекомендуємо проходити кожні 1-2 місяці. Якщо у
              вас є сумніви чи продовжувати обрану програму тренувань, проведіть
              тест- найменша моральна, нервова або фізична втома буде знайдена.
            </p>
            <Image
              src="/fotoLearning/man-using-phone-in-gym.webp"
              alt="man-using-phone-in-gym"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/recover/enough-rest"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/motivation/timidity"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Overtraining;
