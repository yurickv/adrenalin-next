import postHttpService from '@/app/_services/post.service';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

type BlogProps = {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
};

export const BlogSectionCard = async () => {
  const { posts } = await postHttpService.getPosts({ page: 1, limit: 6 });

  return (
    <>
      {posts.map(({ id, topic, title, image }: BlogProps) => (
        <FadeIn
          id={id}
          className="relative rounded-xl bg-white dark:bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
          hover:!shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] w-full  h-[350px] md:h-[450px]  lg:h-[500px] text-center
          last:md:block even:sm:hidden even:lg:block p-4"
        >
          <div className="relative -mt-8  overflow-hidden rounded-xl !shadow-[0_2px_15px_-3px_#00000029,0_10px_20px_-2px_#0000001a] align-top w-full h-3/4">
            <Image
              placeholder="blur"
              blurDataURL="/placeholder.png"
              src={image}
              alt={topic}
              sizes="(max-width: 768px) 100vw, (min-width: 1280px) 50vw,  33vw"
              layout="fill"
              style={{
                objectFit: 'cover',
              }}
            />
            <Link href={`/blog/${id}`}>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </Link>
          </div>

          <div className="h-28 mt-6">
            <Link
              href={`/blog?topic=${topic}`}
              className="block text-main text-right mb-6"
            >
              #{topic}
            </Link>
            <h4 className="text-lg md:text-2xl font-semibold leading-tight text-mainTitle ">
              {title}
            </h4>
          </div>
        </FadeIn>
      ))}
    </>
  );
};
