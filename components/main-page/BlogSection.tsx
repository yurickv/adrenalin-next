import { ButtonSecond } from '../ButtonSecond';
import { BlogSectionCard } from './BlogSectionCard';

export const BlogSection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px]">
      <div className="div-container text-center">
        <h3 className="title">Останні статті</h3>
        <div className="flex flex-col md:grid-cols-2  md:grid lg:grid-cols-3 justify-items-center gap-10 md:gap-x-6 md:gap-y-12 mt-10 md:mt-10 lg:mt-14 items-center  justify-center">
          <BlogSectionCard />
        </div>
        <ButtonSecond
          route="/blog"
          text="Більше статтей..."
          width="inline-block mx-auto mt-6 md:mt-8 lg:mt-11 w-[302px]"
        />
      </div>
    </section>
  );
};
