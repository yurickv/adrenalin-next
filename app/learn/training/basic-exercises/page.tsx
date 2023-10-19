import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const BasicExersices = () => {
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
              &gt; <Link href="/learn">Навчання</Link> &gt;{' '}
              <Link href="/learn/training">Тренування</Link> &gt; Базові вправи
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
              Топ 10 вправ для початку тренувань
            </h2>
            <p className="p-text">
              Перш за все – новачки повинні тренуватись по іншому ніж бувалі
              ліфтери (відвідувачі тренажерного залу), а тим більше по іншому
              ніж виступаючі спортсмени. Не потрібно сліпо копіювати програму
              якогось спортсмена чи популярного фітнес-блогера з думкою, що буду
              качатись як він – стану таким самим. В чому відмінність в
              тренуваннях?
            </p>
            <p className="p-text">
              Перш за все для початківця достатньо 1-2 вправ на м’яз за
              тренування, щоб він ріс (бувалим доводиться робити по 3-4 прави).
              Тому він встигає за 1 тренування потренувати все тіло.
            </p>
            <p className="p-text">
              {' '}
              Популярні спліт програми (роздільне тренування по м’язах,
              наприклад: груди + біцепс, спина + тріцепс, ноги + дельти)
              навантажують цільові м’язи лише 1 раз на тиждень, в той час коли
              початківець міг би їх прокачувати кожного тренування за рахунок
              відносно малих можливих робочих ваг (м’язи встигають відновитись
              за 1, рідше 2 дні до нового тренування).{' '}
            </p>
            <p className="p-text">
              Спліт (розподіл тренувань по групах м’язів) потрібен коли робочі
              ваги досягли орієнтовно 0,8-1 власна вага в жимі лежачи штанги на
              10 раз та 1,2-1,5 власної ваги в присіданні з штангою на 10
              повторів. До цього{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                найшвидший прогрес буде при тренуванні всього тіла за раз
              </span>{' '}
              (можливо розділення на два тренувальні дні – вправи тягни /
              штовхай).
            </p>
            <p className="p-text">
              Як скласти програму? Вибирати базові вправи спрямовані на розвиток
              основних груп м'язів (грудні, спина, ноги), це дозволить підвищити
              ефект від тренувань (бо сили і силової витривалості спочатку
              малувато). Виконуйте вправи в 2-3 підходах по 10-15 повторів. Для
              набору ваги оптимально 10-12 повторів, а при тренуванні
              витривалості ( скиданні ваги) більша кількість повторів 15 -20.
            </p>
            <Image
              src="/fotoLearning/basic-exercises-2.webp"
              alt="man press barbells in the gym"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg "
              width={500}
              height={300}
            />
            <h2 className="h2-list-title mt-2 text-center">
              ТОП 10 вправ при початку тренувань
            </h2>
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Присідання з власною вагою:{' '}
                </span>
                Присідання з власною вагою (чи помірною додатковою вагою) чудово
                зміцнюють нижню частину тіла, включаючи квадрицепси, біцепси
                бедра та сідниці. Вони також допомагають поліпшити баланс і
                стабільність корпусу (тренують прес). Вправа корисна як
                чоловікам так і жінкам.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Віджимання:{' '}
                </span>
                Віджимання - це класична вправа з власною вагою, яка тренує
                груди, плечі та трицепси. Модифіковані версії, такі як
                віджимання від стіни або віджимання з колін- легші варіанти.
                Важчі варіанти: жими штанги чи гантель лежачи.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Вертикальна тяга:{' '}
                </span>
                Вертикальна тяга та тяга гантелі в нахилі чудово тренують великі
                м’язи спини і боряться із сутулістю.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Випади з власною вагою:{' '}
                </span>
                Випади з власною вагою (або з гантелями) тренують квадрицепси,
                підколінні сухожилля та сідниці. Вони також покращують баланс і
                координацію.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Жим гантелей сидячи:{' '}
                </span>
                Вправа тренує м'язи верхньої частини спини, плечі. Допомагає
                покращити поставу та силу верхньої частини тіла.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Сідничний місток або гіперекстензія:{' '}
                </span>
                Активує сідниці та підколінні сухожилля, одночасно задіюючи
                м'язи пресу. Вони ефективні для стабільності нижньої частини
                спини та рухливості стегон. Переважно для жінок. Гіперекстензія
                допомагає укріпити поперек ( без міцної спини забудьте про
                великі ваги і досягнення) та задню поверхню стегна.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Підйом на платформу:{' '}
                </span>
                Підйоми зміцнюють нижню частину тіла, особливо квадрицепси і
                сідниці. Ви можете почати з меншої висоти кроку і прогресувати в
                міру того, як станете більш впевненим у собі.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  8. Підйоми на біцепс:{' '}
                </span>
                Скручування на біцепс націлені на біцепс і є чудовим початком
                силових тренувань з гантелями або резиновими стрічками.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  9. Піднімання ніг лежачи/ у висі (для пресу):{' '}
                </span>
                Піднімання ніг сидячи націлені на м'язи живота, особливо нижній
                прес. Це безпечна вправа для початківців для розвитку таких
                омріяних "кубиків" пресу.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  10. Серцево-судинні вправи або кардіо{' '}
                </span>
                (ходьба, їзда на велосипеді, скакалка): мають важливе значення
                для покращення серцево-судинної форми та спалювання калорій.
                Вони є чудовою відправною точкою для початківців. Але не
                рекомендуються для худих при наборі ваги!
              </li>
            </ul>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Висновок:
              </span>{' '}
              Важливо починати з вправ, які відповідають вашому рівню фізичної
              підготовки, і поступово прогресувати, коли ви відчуєте себе більш
              комфортно і впевнено. Включіть ці базові вправи у свою програму
              тренувань, зосереджуючись на правильній формі та техніці. Якщо ви
              не впевнені, як правильно виконувати будь-яку з цих вправ,
              зверніться за порадою до{' '}
              <Link href="/services" className="underline underline-offset-4">
                персонального тренера.
              </Link>{' '}
              Не забувайте прислухатися до свого тіла, робити перерви, коли це
              необхідно, і запасіться терпінням на початку своєї
              фітнес-подорожі. Завдяки цілеспрямованості та послідовності ви
              закладете міцний фундамент для більш здорового та активного
              способу життя.
            </p>
            <Image
              src="/fotoLearning/basic-exercises.webp"
              alt="man squats with a barbell in the gym"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg "
              width={300}
              height={500}
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/training/warm-up"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/training/load-progression"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BasicExersices;
