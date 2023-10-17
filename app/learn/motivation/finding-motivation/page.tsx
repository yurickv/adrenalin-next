import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

const FindingMotivation = () => {
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
              &gt; Навчання &gt; Мотивація &gt; Пошук мотивації
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
              Пошук мотивації
            </h2>
            <p className="p-text">
              Ви намагаєтеся знайти мотивацію, щоб піти в спортзал і розпочати
              тренування? Постійно відкладаєте тренування до понеділка чи до
              купівлі нових кросів? Ви не самотні! Залишатися вмотивованим може
              бути складно, але з правильним мисленням і підходом ви можете
              відчинити двері у світ фізичної та ментальної трансформації.
            </p>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Найважче прийти в тренажерний зал).
              </span>{' '}
              На початку потрібно призвичаїтись ходити РЕГУЛЯРНО в спортзал,
              лише тоді від цього буде якась користь. Для формування нової
              звички потрібно зробити біля 40 повторних дій або 2-3 місяці
              тренувань. Щоб так довго "промучитись") перегляду стрічки в
              Інтаграм чи ТікТоці замало. Ось кілька методів, використовуючи які
              ви покращите відношення не лише до тренувань, але й до всіх своїх
              справ.
            </p>
            <Image
              src="/fotoLearning/woman-at-gym-taking-selfies.webp"
              alt="woman at gym taking selfies"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Встановіть чіткі цілі:
                </span>{' '}
                Визначте свої фітнес-цілі та поставте конкретні, вимірювані,
                досяжні, актуальні та обмежені в часі (SMART) цілі. Незалежно
                від того, чи це схуднення, нарощування м'язів або покращення
                загальної фізичної форми, наявність чітких цілей дасть вам
                відчуття мети та напрямку.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Візуалізуйте успіх:{' '}
                </span>
                Метод, яким користувався легендарний Арнольд Шварценегер. Ще
                будучи початківцем він постійно візуалізував, як виграє на
                змаганнях і свою майбутню форму, ніби ці часи ВЖЕ настали.
                Уявіть, як ви досягаєте своїх фітнес-цілей. Візуалізація
                здоровішої, сильнішої та підтягнутішої версії себе буде потужним
                мотиваційним інструментом. Уявіть, як досягнення цих цілей
                позитивно вплине на ваше життя.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Створіть систему підтримки:{' '}
                </span>
                Оточіть себе однодумцями, які поділяють подібні
                фітнес-прагнення. Приєднуйтесь до фітнес-класів, знайдіть
                приятеля для тренувань або станьте частиною фітнес-спільноти в
                Інтернеті. Надійна спільнота однодумців допоможе вам бути
                позитивним і мотивованим як під час перемог, так і під час
                невдач. Візьміть кілька{' '}
                <Link
                  href="/services"
                  className="underline underline-offset-4 font-semibold text-mainTitle dark:text-mainTitleBlack"
                >
                  персональних тренувань,
                </Link>{' '}
                тренер потужно мотивує і не дасть прохалявити і заскучати.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Відстежуйте свій прогрес:{' '}
                </span>
                Ведіть щоденник тренувань або використовуйте фітнес-додатки, щоб
                записувати свої тренування, досягнення та етапи. Дуже допомагає
                робити свої фото до і після певного періоду тренувань.
                Відстеження прогресу не лише допоможе вам не збитися з курсу,
                але й надасть реальні докази того, що з часом ви покращуєтесь.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Святкуйте маленькі перемоги:{' '}
                </span>
                Визнавайте і святкуйте свої досягнення, якими б незначними вони
                не здавалися. Кожен крок вперед, навіть незначний, є свідченням
                вашої відданості та наполегливої праці. В ідеалі ведіть свій
                щоденник досягнень (в "погані дні" записи в щоденнику
                підтримають вашу впевненість в собі).
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Знайдіть вправи, які приносять задоволення:{' '}
                </span>
                Знайдіть заняття, які вам справді подобаються. Танці, їзда на
                велосипеді, тренуванння у спортзалі чи йога - заняття улюбленою
                справою перетворять тренування не на рутину, а на захоплюючу
                частину вашого дня.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Складіть послідовний графік:{' '}
                </span>
                Створіть графік тренувань, який вписується у ваше повсякденне
                життя. Послідовність - це ключ до формування нових звичок і
                підтримки мотивації в довгостроковій перспективі.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  8. Нагадуйте собі навіщо:{' '}
                </span>
                У дні, коли мотивація слабшає, згадуйте причини, через які ви
                почали свій шлях у фітнесі. Подумайте про позитивні зміни, яких
                ви вже досягли, і про цілі, яких прагнете досягти.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  9. Залишайтеся натхненними:{' '}
                </span>
                Слідкуйте за фітнес-блогерами, читайте історії успіху та
                дивіться мотиваційні відео, щоб залишатися натхненними.
                Спостереження за тим, як інші долають свої фітнес-виклики, може
                підживити вашу власну рішучість.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  10. Прийміть подорож:{' '}
                </span>
                Зрозумійте, що прогрес не завжди може бути лінійним, а невдачі -
                це природна частина будь-якої подорожі. Прийміть цей процес,
                вчіться на перешкодах і продовжуйте рухатися вперед зі
                стійкістю.
              </li>
            </ul>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Висновок:{' '}
              </span>
              Перш за все, пам'ятайте, що ви здатні досягти неймовірних речей,
              коли вірите в себе і знаходите внутрішній драйв для досягнення
              успіху. Тренування у спортзалі - це не просто фізична
              трансформація, це можливість розкрити весь свій потенціал і стати
              кращою версією себе. Залишайтеся зосередженими, залишайтеся
              позитивними, і нехай ваша мотивація стане тією іскрою, яка
              запалить пристрасть до фітнесу та здоров'я на все життя!
            </p>
            <Image
              src="/fotoLearning/strong-man-training-in-gym.webp"
              alt="strong man training in gym"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/motivation/timidity"
                text="&#10094; ПОПЕРЕДНЯ"
              />
              <Button
                route="/learn/motivation/power-of-discipline"
                text="НАСТУПНА &#10095;"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default FindingMotivation;
