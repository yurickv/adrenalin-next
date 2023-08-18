import Link from 'next/link';
import { redirect } from 'next/navigation';
import parse from 'html-react-parser';
import Image from 'next/image';

async function BlogPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    redirect('/');
  }

  return (
    <section className="pt-[46px] pb-[90px] flex flex-col items-center">
      <div className="container md:px-10 lg:px-[100px] xl:px-[136px] text-center flex flex-col gap-6">
        <Link
          href="#"
          className="text-right font-poppins text-sm font-semibold text-main hover:text-hover focus:text-hover"
        >
          #{post.topic}
        </Link>
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

async function getPost(id: string) {
  try {
    const res = await fetch(`http://${process.env.HOST}/api/post/${id}`);
    if (!res.ok) return undefined;
    const { post } = await res.json();
    return post;
  } catch (e) {
    console.log(e);
  }
}

export default BlogPage;
