import { ButtonSecond } from '../ButtonSecond';
import { ServiceCardMain } from './ServicesSectionCard';
import FadeIn from '@/components/FadeIn';

export const ServicesSection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
      <div className="div-container text-center">
        <h2 className="title text-mainTitle dark:text-mainTitleBlack">
          Що ми пропонуємо?
        </h2>
        <FadeIn className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-10 lg:mt-14 items-center">
          <ServiceCardMain />
        </FadeIn>
        <ButtonSecond
          route="/services"
          text="Всі послуги"
          width="inline-block mx-auto mt-6 md:mt-8 lg:mt-11 w-[273px] md:w-[302px]"
        />
      </div>
    </section>
  );
};
