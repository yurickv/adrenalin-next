import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../../Sidebar';
import { ButtonSecond } from '@/components/ButtonSecond';
import { Button } from '@/components/Button';

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

            <p className="p-text">
              Як зберегти мотивацію продовжувати відвідувати спортзал, особливо
              якщо я не бачу негайних результатів? Сила дисципліни: Ваш ключ до
              досягнення цілей у спортзалі.
            </p>
            <p className="p-text">
              Коли справа доходить до досягнення ваших цілей у спортзалі, є
              важлива якість, яка перевершує швидкоплинну мотивацію -
              дисципліна. У той час як мотивація може дати поштовх вашій
              фітнес-подорожі, саме дисципліна буде підтримувати полум'я,
              проводячи вас крізь виклики та невдачі. Дисципліна закладає основу
              для довготривалого успіху та трансформації.{' '}
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack">
                Не дарма багато успішних спортсменів стають в подальшому
                успішними бізнесменами.
              </span>
            </p>
            <Image
              src="/fotoLearning/tattooed-bodybuilder-in-gym.webp"
              alt="tattooed bodybuilder in gym pumping biceps"
              sizes="100vw"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
              loading="lazy"
            />
            <p className="p-text">
              Ось чому дисципліна важливіша за мотивацію, коли йдеться про
              досягнення цілей у спортзалі:
            </p>
            <ul className="ul-list !list-image-none">
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  1. Послідовні дії:
                </span>{' '}
                Мотивація може з'являтися і зникати, але дисципліна - це
                непохитне зобов'язання з'являтися на тренуваннях день у день,
                незалежно від того, як ви себе почуваєте. Йдеться про
                встановлення регулярного режиму тренувань, вибір здорової їжі та
                відданість процесу.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  2. Подолання перешкод:{' '}
                </span>
                Дисципліна дозволяє вам долати перешкоди, які можуть виникнути
                на вашому шляху до фітнесу. Незалежно від того, чи це щільний
                графік, втома або зовнішні відволікаючі фактори, дисципліна дає
                вам можливість залишатися на правильному шляху і не дозволяти
                цим бар'єрам зупинити ваш прогрес.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  3. Формування звичок:{' '}
                </span>{' '}
                Вже говорили про це в попередньому розділі. Формування
                позитивних звичок є наріжним каменем успіху. Дисциплінованість
                допоможе вам перетворити здорову поведінку на другу натуру, що
                полегшить дотримання фітнес-плану, не покладаючись лише на
                мотивацію.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  4. Довгострокове бачення:{' '}
                </span>
                У той час як мотивація, як правило, зосереджена на
                короткострокових вигодах, дисципліна зосереджує увагу на
                довгостроковій вигоді. Йдеться про розуміння того, що справжня
                трансформація вимагає послідовних зусиль протягом тривалого
                часу, і вона не відбудеться за одну ніч.{' '}
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack">
                  Здатність докласти зусиль зараз і потерпіти заради майбутньої
                  значно більшої вигоди - саме це відрізняє усіх успішних людей.{' '}
                </span>
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  5. Протистояти спокусам:{' '}
                </span>
                Дисципліна дає вам можливість протистояти спокусам, які можуть
                звести нанівець ваш прогрес, таким як пропуск тренувань,
                потурання нездоровій їжі або сидячий спосіб життя.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  6. Прогрес, а не досконалість:{' '}
                </span>
                Дисципліна дає вам можливість протистояти спокусам, які можуть
                звести нанівець ваш прогрес, таким як пропуск тренувань,
                потурання нездоровій їжі або сидячий спосіб життя.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  7. Підзвітність перед собою:{' '}
                </span>
                Дисципліна - це відповідальність перед собою і своїми цілями. Це
                означає прийняття свідомого рішення про пріоритетність вашого
                здоров'я та фізичної форми, навіть коли ніхто не бачить.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  8.Прийняття дискомфорту:{' '}
                </span>
                Справжнє зростання часто відбувається за межами вашої зони
                комфорту. Дисципліна дозволяє вам приймати дискомфорт,
                розширювати свої межі і постійно кидати собі виклик у прагненні
                до вдосконалення.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  9. Зміна мислення:{' '}
                </span>
                Якщо на мотивацію можуть впливати зовнішні фактори, то
                дисципліна приходить зсередини. Вона вимагає зміни мислення,
                коли ви берете на себе повну відповідальність за свої дії та
                їхній вплив на вашу подорож.
              </li>
              <li className="p-text">
                <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                  10. Міцний фундамент:{' '}
                </span>
                За відсутності мотивації дисципліна слугує міцним фундаментом,
                на який можна покластися. Вона забезпечує структуру і рішучість,
                необхідні для того, щоб залишатися відданим справі, навіть коли
                стає важко.
              </li>
            </ul>
            <p className="p-text">
              <span className="font-semibold text-mainTitle dark:text-mainTitleBlack mt-2">
                Висновок:{' '}
              </span>
              Пам'ятайте, що мотивація - це потужний каталізатор для початку
              вашої фітнес-подорожі, але дисципліна - це рушійна сила, яка
              підтримує її. Візьміть на озброєння силу дисципліни і побачите, як
              ваші цілі в спортзалі стануть не лише досяжними, але й сходинками
              на шляху до здоровішого, підтягнутішого та витривалішого вас.
              Будьте дисциплінованими, зосередженими і нехай ваша рішучість буде
              дороговказом на вашому шляху до успіху!
            </p>
            <h3 className="h2-list-title mt-2">
              Більше інформації ви знайдете в нашому{' '}
              <Link
                href="/calcs/fat-calculator"
                className="underline underline-offset-4 font-semibold text-mainTitle dark:text-mainTitleBlack"
              >
                Блозі.
              </Link>
            </h3>

            <Image
              src="/fotoLearning/fitnesswoman-doing-deadlift-in-gym.webp"
              alt="fitnesswoman doing deadlift in gym"
              sizes="100vw"
              loading="lazy"
              className="w-auto h-auto mt-6 rounded-lg "
              width={500}
              height={300}
            />
            <div className="flex gap-6 mt-8 justify-end pt-8 border-t-2 border-main ">
              <ButtonSecond
                route="/learn/motivation/finding-motivation"
                text="&#10094; ПОПЕРЕДНЯ"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PowerOfDiscipline;
