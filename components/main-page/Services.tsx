import { Button } from "../Button";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="py-[88px] ">
      <div className="container xl:px-[132px] lg:px-[66px]  mx-auto">
        <h3 className="title">Що ми пропонуємо?</h3>
        <div className="flex gap-6">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};
