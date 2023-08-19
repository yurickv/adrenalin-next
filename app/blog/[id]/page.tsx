import Link from 'next/link';
import { redirect } from 'next/navigation';
import parse from 'html-react-parser';
import Image from 'next/image';
import { getPost } from '@/const/function';

import { GoBackBtn } from '@/components/blog-page/GoBackBtn';
// import { useRouter } from 'next/router';

async function BlogPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    redirect('/');
  }

  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.back();
  // };

  return (
    <section className="pt-[46px] pb-[90px] flex flex-col items-center">
      <div className="container md:px-10 lg:px-[100px] xl:px-[136px] text-center flex flex-col gap-6">
        <div className="flex justify-between">
          <GoBackBtn text="Назад" />
          <Link
            href="#"
            className="text-right font-poppins text-sm font-semibold text-main hover:text-hover
             focus:text-hover rounded-full p-4  hover:bg-orange-100 focus:bg-orange-100 cursor-pointer"
          >
            #{post.topic}
          </Link>
        </div>

        <h1 className="font-poppins text-[32px] font-semibold text-mainText">
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
    </section>
  );
}

export default BlogPage;
