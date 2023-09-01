import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCard } from '@/components/blog-page/BlogCard';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import { Filter } from '@/components/Filter';
import { Arrow } from '@/components/icons/Arrow-down';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Блог тренажерного залу Adrenalin',
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
      <section className="py-[40px] md:py-[44px] lg:py-[88px]">
        <div className="div-container flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center">
          <div className="flex justify-between items-center w-full">
            <div className="min-w-[10px] hidden md:block">
              {(searchParams?.topic || searchParams?.search) && (
                <div
                  className="group p-2 rounded-lg hover:bg-orange-100 transition-all duration-300 
                cursor-pointer flex gap-2 text-left"
                >
                  <div className="-rotate-180 text-main  ">
                    <Arrow />
                  </div>
                  <Link href="/blog" className="group-hover:text-main">
                    До всіх постів
                  </Link>
                </div>
              )}
            </div>
            <div className="flex gap-2 ">
              <p className="p-2">Вибрати тему:</p>
              <Filter searchParams={searchParams} />
            </div>
          </div>
          <div
            className="flex flex-col md:grid md:grid-cols-2  lg:grid-cols-3
          justify-items-center gap-10 md:gap-x-6 md:gap-y-12 mt-10 md:mt-10
          lg:mt-14 items-center  justify-center"
          >
            <BlogCard searchParams={searchParams} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
