import Image from 'next/image';
import Link from 'next/link';
import postHttpService from '@/app/_services/post.service';
import { Pagination } from '@/components/blog-page/Pagination';

type BlogProps = {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
};

export const BlogCard = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { posts, pages } = await postHttpService.getPosts({
    page: searchParams?.page || 1,
    search: searchParams?.search,
    topic: searchParams?.topic,
  });

  if (Number(searchParams.page) > pages || Number(searchParams.page) < 1) {
    return <b>Not found</b>;
  }
  if (!pages) {
    return (
      <div className="relative mx-auto md:col-span-2 lg:col-span-3 bg-white dark:bg-darkBody">
        <div className="relative h-[400px]  w-[340px] md:h-[490px] md:w-[720px] lg:w-[1070px] lg:h-[720px] ">
          <Image
            placeholder="blur"
            blurDataURL="/placeholder.png"
            src="/man-fitness-404.jpg"
            alt="Man with dumbells"
            sizes="(max-width: 768px) 100vw, (min-width: 1280px) 50vw,  33vw"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <p className="absolute left-5 top-5 md:top-1/3 text-mainTextBlack md:text-xl lg:text-2xl font-bold">
          Упс.
          <br className="md:hidden" /> По Вашому запиту <br /> нічого не
          знайдено!
        </p>
      </div>
    );
  }

  return (
    <>
      {posts.map(({ id, topic, title, description, image }: BlogProps) => (
        <div
          id={id}
          className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         text-center hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px]"
        >
          <div className="relative -mt-4 !mr-4 !ml-4 overflow-hidden rounded-lg !shadow-[0_2px_15px_-3px_#00000029,0_10px_20px_-2px_#0000001a] w-[calc((100%-32px))] h-[270px] align-middle object-cover">
            <Image
              placeholder="blur"
              blurDataURL="/placeholder.png"
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
            <Link href={`/blog/${id}`} aria-label={title}>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </Link>
          </div>

          <div className="p-3">
            <Link
              href={`/blog?topic=${topic}`}
              aria-label={title}
              className="block text-main text-right"
            >
              #{topic}
            </Link>
            <h5 className="text-lg md:text-2xl font-semibold leading-tight text-mainTitle h-[67px] line-clamp-3">
              {title}
            </h5>
            <p className="mt-6 line-clamp-3 text-mainText h-[72px]">
              {description}
            </p>
          </div>
        </div>
      ))}
      <div
        className="flex flex-col md:grid md:col-span-2 lg:col-span-3 
       items-center justify-items-center "
      >
        <Pagination searchParams={searchParams} pages={pages} />
      </div>
    </>
  );
};
