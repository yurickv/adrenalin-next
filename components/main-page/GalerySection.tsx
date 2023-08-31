import GalerySectionCard from './GalerySectionCard';

export const GalerySection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px]">
      <div className="div-container text-center">
        <h3 className="title">Галерея</h3>

        <GalerySectionCard />
      </div>
    </section>
  );
};
