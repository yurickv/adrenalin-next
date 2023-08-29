import postHttpService from '@/app/_services/post.service';
import Image from 'next/image';
import Link from 'next/link';

type BlogProps = {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
};

export const BlogSectionCard = async () => {
  const { posts } = await postHttpService.getPosts(1, 6);
  console.log(posts);
  return (
    <>
      {posts.map(({ id, topic, title, image }: BlogProps) => (
        <div
          id={id}
          className="relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         dark:bg-neutral-700  w-full  h-[350px] md:h-[450px]  lg:h-[500px] text-center last:lg:hidden last:xl:block last:md:block even:sm:hidden even:lg:block p-4"
        >
          <div className="relative -mt-8  overflow-hidden rounded-lg !shadow-[0_2px_15px_-3px_#00000029,0_10px_20px_-2px_#0000001a] align-top w-full h-3/4">
            <Image
              src={image}
              alt={topic}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              layout="fill"
              style={{
                objectFit: 'cover',
              }}
              // width={500}
              // height={300}
            />
            <Link href={`/blog/${id}`}>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </Link>
          </div>

          <div className=" h-28 mt-6">
            <p className="text-main text-right mb-6">#{topic}</p>
            <h5 className="text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};
