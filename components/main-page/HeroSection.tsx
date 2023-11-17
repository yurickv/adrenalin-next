import { Button } from '../Button';
import FadeIn from '@/components/FadeIn';

export const HeroSection = () => {
  return (
    <section className=" bg-hero-bg bg-center bg-cover ">
      <div className="div-container-hero">
        <FadeIn>
          <h1 className="sr-only">Тренажерний зал Адреналін</h1>
          <h2 className="text-2xl lg:text-3xl font-poppins font-bold lg:w-[845px] text-white text-center md:text-left">
            Безкоштовний посібник для початківців
          </h2>
          <p className="text-lg lg:text-2xl font-normal text-white mt-6 max-w-[700px]">
            Не знаєш з чого почати в спортзалі? <br /> Як тренуватись та їсти,
            щоб схуднути чи набрати вагу? Тут ти знайдеш відповіді.
          </p>
          <Button
            route="/learn/intro"
            text="Дізнатися більше"
            width="w-full md:w-[332px] lg:w-[222px] mt-6 !shadow-none !hover:shadow-none"
          />
        </FadeIn>
      </div>
    </section>
  );
};
