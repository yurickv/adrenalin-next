import Link from 'next/link';
import { redirect } from 'next/navigation';
import parse from 'html-react-parser';
import Image from 'next/image';

import { GoBackBtn } from '@/components/blog-page/GoBackBtn';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import postHttpService from '@/app/_services/post.service';

// import { useRouter } from 'next/router';

async function BlogPage({ params }: { params: { id: string } }) {
  const post = await postHttpService.getPostById(params.id);
  if (!post) {
    redirect('/');
  }

  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.back();
  // };

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
      <section className="py-[40px] md:py-[44px] lg:py-[88px] flex flex-col items-center">
        <div className="div-container text-center flex flex-col gap-6 relative">
          <Link
            href="#"
            className="absolute top-0 right-5 text-right font-poppins text-sm font-semibold text-main hover:text-hover
             focus:text-hover rounded-full p-4  hover:bg-orange-100 focus:bg-orange-100 cursor-pointer"
          >
            #{post.topic}
          </Link>
          <h1 className="font-poppins text-[32px] font-semibold text-mainText pr-28">
            {post.title}
          </h1>
          <p className="description">{post.description}</p>
          <Image
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
{
  /* <div className="flex justify-between items-center ">
  <h3 className="my-11 text-left text-mainText flex gap-2 ">
    <Link href="/" className="flex gap-2 items-center">
      {' '}
      <HomeIcon />
      Adrenalin_gym
    </Link>
    <Link href="/blog">&gt; Блог</Link>
    <span className="font-semibold"> &gt; {post.title}</span>
  </h3>
</div>; */
}
