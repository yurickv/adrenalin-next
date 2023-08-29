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
        <div className="container xl:px-[132px] lg:px-[66px] py-[45px] mx-auto text-center ">
          <h3 className="my-11 text-left text-white flex gap-2 ">
            <HomeIcon />
            <Link href="/">Adrenalin_gym</Link>
            <span className="font-semibold"> &gt; Блог</span>
          </h3>
          <h1 className="title mb-14 text-white">Блог</h1>
        </div>
      </section>
      <section>
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center m-11 flex flex-wrap gap-x-6 gap-y-10">
          <BlogCard searchParams={searchParams} />
        </div>
      </section>
    </main>
  );
}

export default Blog;
