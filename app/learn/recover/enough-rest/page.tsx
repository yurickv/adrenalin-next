import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import profilePic from '../../../../public/bg-hero.webp';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const EnoughRest = () => {
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
              <Link href="/learn/recover">Відновлення</Link> &gt; Достатній
              відпочинок
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
              Достатній відпочинок
            </h2>

            <h2 className="h2-list-title mt-2 text-center">
              Відновлення після тренувань: ключ до успіху
            </h2>
            <p className="p-text">
              Тренування в тренажерному залі - це твій крок до кращої фізичної
              форми. Проте, ефективність тренувань не обмежується лише часом,
              проведеним на тренажерах. Важливо подбати про відновлення тіла
              після фізичних вправ.
            </p>
            <p className="p-text">
              Відновлення - це процес, під час якого ваше тіло відновлює м'язи,
              відновлює енергію та розвивається після навантаження. Ось деякі
              ключові аспекти відновлення:
            </p>
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Сон:{' '}
                </span>
                Дайте своєму тілу відпочинок. Від 7-9 годин сну на ніч
                допомагають м'язам і центральній нервовій системі відновитися.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Харчування:{' '}
                </span>
                Після тренувань важливо отримати відповідні поживні речовини,
                включаючи білок для відновлення м'язів та вуглеводи для
                поповнення енергії. Дуже часто початківці нехтують харчуванням.
                Якщо хочеш змінитись, то потрібно змінити і своє харчування.
                Людині, яка регулярно тренується треба БІЛЬШЕ білкової їжі, ніж
                іншиим.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Гідратація:{' '}
                </span>
                Пити достатню кількість води допомагає зберегти гідратацію та
                підтримує нормальну роботу організму. При обезводненні організму
                лише на 4% сила падає до 20%, можуть бути судоми мязів.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Розтяжка і масаж:{' '}
                </span>
                М'язи після тренувань перебувають у скороченому стані (повністю
                не розслаблені або "забиті") і розтяжка вертає їх розслаблений
                (витягнутий) стан, також це допомагає уникнути потенційних травм
                та покращує гнучкість. Це значно пришвидшує відновлення мязів.
                Також після фізичний вправ масаж може полегшити напругу та біль
                і сприяє швидшому відновленню. недарма більшість професійних
                спортсменів мають своїх масажистів.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Активний Відпочинок:{' '}
                </span>
                Розглядайте активний відпочинок, такий як прогулянки або йога,
                для поліпшення фізичного та психічного стану. Іншими словами
                корисна зміна виду діяльності. Плавання дуже хороший вид
                відновлювальної процедури.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Відновлювальний (розвантажувальний) період{' '}
                </span>
                в тренуваннях в спортзалі. Це коли регулярно раз на 1-2 місяці
                знижуємо робочі ваги (на 30-50%) і кількість підходів у вправах
                на 1 тиждень. Також можна замінити вправи на легші їх варіанти (
                наприклад присідання з штангою на жим ногами). Подібна зміна
                тренувань всього за тиждень додасть вам нових сил.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Контрасний душ і сауна.{' '}
                </span>
                Контрасний душ - це коли почергово під то холодною, то під
                теплою водою, активує імунну систему і дає ПОТУЖНИЙ заряд
                енергії. На початках (тай потім) буває важко психологічно
                налаштуватись на прийом контрасного душу. Сауна завдяки дії
                тепла (інфрачервого випромінювання) пришлидшує відновлення
                суглобів і звязок, знімає запальні процеси в них і мязах. При
                силових тренуваннях попаритись 1 раз в тиждень - ідеальний
                варіант.
              </li>
            </ul>
            <p className="p-text">
              Важливо розуміти, що відновлення - це індивідуальний процес.
              Слухайте своє тіло та надавайте йому час для відновлення після
              тренувань. Це ключ до успішних тренувань та досягнення ваших
              цілей.
            </p>
            <Image
              src="/fotoLearning/woman-drinking-water-while-relaxing-at-the-gym.webp"
              alt="woman drinking water while relaxing at the gym"
              sizes="100vw"
              className="w-full h-auto mt-6 rounded-lg "
              width={500}
              height={300}
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/training/load-progression"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/recover/overtraining"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default EnoughRest;
