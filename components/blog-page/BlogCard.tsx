import { getPosts } from '@/const/function';
import Image from 'next/image';
import Link from 'next/link';

type BlogProps = {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
};

export const BlogCard = async () => {
  const { posts } = await getPosts(1);

  return (
    <>
      {posts.map(({ id, topic, title, description, image }: BlogProps) => (
        <div
          className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         dark:bg-neutral-700 text-center"
        >
          <div className="relative -mt-4 !mr-4 !ml-4 overflow-hidden rounded-lg !shadow-[0_2px_15px_-3px_#00000029,0_10px_20px_-2px_#0000001a] w-[calc((100%-32px))] h-[270px] align-middle object-cover">
            <Image
              src={image}
              alt={topic}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              width={500}
              height={350}
              className="block "
            />
            <Link href={`/blog/${id}`}>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </Link>
          </div>

          <div className="p-3">
            <p className="text-main text-right">#{topic}</p>
            <h5 className="text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 h-16">
              {title}
            </h5>
            <p className="mt-6 line-clamp-3">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
