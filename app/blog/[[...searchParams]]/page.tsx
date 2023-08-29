import { BlogCard } from '@/components/blog-page/BlogCard';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Link from 'next/link';

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
        <div className="div-container flex md:flex-wrap gap-x-6 gap-y-10">
          <div
            className="flex flex-col md:grid-cols-2  md:grid lg:grid-cols-3
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
