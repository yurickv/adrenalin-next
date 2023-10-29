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
        <p className="text-lg lg:text-2xl font-poppins md:w-6/12  text-mainText mt-14 mb-11 text-left md:mx-0">
          Прості калькулятори допоможуть визначити ІМТ (індекс маси тіла),
          відсоток жиру в тілі та денну потребу калорій. Це допоможе стежити за
          прогресом і збалансувати твоє харчування та тренування.
        </p>

        <Button
          route="/calcs"
          text="Дізнатися більше"
          width="w-[273px] md:w-[302px] mx-auto md:mx-0 lg:mx-auto"
        />
      </FadeIn>
    </section>
  );
};
