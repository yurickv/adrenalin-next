import { Button } from '../Button';
import { ServiceCardMain } from './ServicesSectionCard';

export const ServicesSection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px]">
      <div className="div-container text-center">
        <h3 className="title">Що ми пропонуємо?</h3>
        <div className=" md:flex md:flex-row md:gap-6 mt-6 md:mt-10 lg:mt-14 items-center">
          <ServiceCardMain />
        </div>
        <Button
          route="/services"
          text="Детальніше..."
          width="inline-block mx-auto mt-6 md:mt-8 lg:mt-11 w-[302px] !bg-none 
        !border-main border-2 border-solid !text-mainText !shadow-none"
        />
      </div>
    </section>
  );
};
