import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCard } from '@/components/blog-page/BlogCard';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import { Filter } from '@/components/Filter';
import { Arrow } from '@/components/icons/Arrow-down';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Блог',
  description:
    'Блог тренажерного залу Adrenalin: все про харчування, тренування та мотивація',
};
function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div
          className="div-container
        py-[20px] md:py-[44px]  mx-auto text-center flex flex-col gap-5"
        >
          <h3 className="text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Блог</span>
          </h3>
          <h1 className="title mb-14 text-white">Блог</h1>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
        <FadeIn className="div-container flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center">
          <BlogCard searchParams={searchParams} />
        </FadeIn>
      </section>
    </main>
  );
}

export default Blog;
