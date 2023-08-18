import { BlogCard } from '@/components/blog-page/BlogCard';
import Image from 'next/image';
import Link from 'next/link';

function Blog() {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div className="container xl:px-[132px] lg:px-[66px] py-[45px] mx-auto text-center ">
          <h3 className="my-11 text-left text-white">
            Головна сторінка <Link href="/">Adrenalin_gym</Link>
            <span className="font-semibold"> &gt; Блог</span>
          </h3>
          <h1 className="title mb-14 text-white">Блог</h1>
        </div>
      </section>
      <section>
        <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center m-11 flex flex-wrap gap-x-6 gap-y-10">
          <BlogCard />
        </div>
      </section>
    </main>
  );
}

export default Blog;
