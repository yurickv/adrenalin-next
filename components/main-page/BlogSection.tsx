import { ButtonSecond } from '../ButtonSecond';
import { BlogSectionCard } from './BlogSectionCard';
import { FadeInStagger } from '@/components/FadeIn';

export const BlogSection = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
      <div className="div-container text-center">
        <h3 className="title text-mainTitle dark:text-mainTitleBlack">
          Останні статті
        </h3>

        <FadeInStagger className="flex flex-col md:grid-cols-2  md:grid lg:grid-cols-3 justify-items-center gap-10 md:gap-x-6 md:gap-y-12 mt-10 md:mt-10 lg:mt-14 items-center  justify-center">
          <BlogSectionCard />
        </FadeInStagger>
        <ButtonSecond
          route="/blog"
          text="Більше статтей..."
          width="inline-block mx-auto mt-6 md:mt-8 lg:mt-11 w-[273px] md:w-[302px]"
        />
      </div>
    </section>
  );
};
