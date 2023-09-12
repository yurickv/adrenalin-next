import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import parse from 'html-react-parser';
import Image from 'next/image';

import { GoBackBtn } from '@/components/blog-page/GoBackBtn';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import postHttpService from '@/app/_services/post.service';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const post = await postHttpService.getPostById(id);

  return {
    title: post.title,
    description: post.description,
  };
}

async function BlogPage({ params }: Props) {
  const post = await postHttpService.getPostById(params.id);
  if (!post) {
    redirect('/');
  }

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
            <Link href="/blog" className="font-semibold">
              &gt;&nbsp;Блог
            </Link>
            <span className="font-semibold truncate ">&gt; {post.title}</span>
          </h3>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px] flex flex-col items-center bg-white dark:bg-darkBody">
        <div className="div-container text-center flex flex-col gap-6 relative">
          <Link
            href={`/blog?topic=${post.topic}`}
            className="absolute top-0 right-5 text-right font-poppins text-sm font-semibold text-main 
              rounded-full p-4  hover:bg-orange-100 focus:bg-orange-100 dark:hover:bg-mainText dark:focus:bg-mainText cursor-pointer"
          >
            #{post.topic}
          </Link>
          <h1
            className="font-poppins mt-[52px] md:mt-0 text-xl md:text-[32px] font-semibold text-mainTitle dark:text-mainTitleBlack
           md:pr-28 line-clamp-4"
          >
            {post.title}
          </h1>
          <p className="description">{post.description}</p>
          <Image
            placeholder="blur"
            blurDataURL="/placeholder.png"
            src={post.image}
            alt={post.topic}
            width={800}
            height={600}
            className="!w-full align-middle"
          />
          {parse(post.markup)}
        </div>
        <GoBackBtn text="Назад" />
      </section>
    </main>
  );
}

export default BlogPage;
