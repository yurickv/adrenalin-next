import Image from 'next/image';
import { Button } from '../Button';
import me from '../../public/woman.webp';
import FadeIn from '@/components/FadeIn';

export const AboutCalc = () => {
  return (
    <section className="  bg-calc-bg ">
      <FadeIn
        className="div-container  mx-auto md:bg-calc-bg-woman bg-contain bg-no-repeat bg-right 
        py-[40px] md:py-[44px] lg:py-[88px]
      "
      >
        <h3 className="title md:text-left  lg:text-center">
          Перевір свою форму <br /> просто зараз
        </h3>

        <Image
          placeholder="blur"
          src={me}
          alt="pretty woman"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
          className="float-right md:hidden"
        />
        <p className="text-2xl font-poppins md:w-6/12  text-mainText mt-14 mb-11 text-left">
          Прості калькулятори допоможуть визначити ІМТ (індекс маси тіла), денну
          потребу калорій та інші важливі параметри, які допоможуть збалансувати
          твоє харчування та тренування. Здорове харчування - це основа успіху,
          і ми готові допомогти тобі досягти найкращих результатів!
        </p>

        <Button
          route="/calcs"
          text="Дізнатися більше"
          width="w-[273px] md:w-[302px]"
        />
      </FadeIn>
    </section>
  );
};
