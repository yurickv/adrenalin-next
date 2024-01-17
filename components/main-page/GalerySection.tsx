import dynamic from 'next/dynamic';

const GalerySectionCard = dynamic(() => import('./GalerySectionCard'), {
  ssr: false,
});

export const GalerySection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
      <div className="div-container text-center">
        <h3 className="title text-mainTitle dark:text-mainTitleBlack">
          Галерея
        </h3>

        <GalerySectionCard />
      </div>
    </section>
  );
};
