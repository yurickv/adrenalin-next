import { blogCardInfo } from "@/const";
import Image from "next/image";
import Link from "next/link";

export const BlogSectionCard = () => {
  return (
    <>
      {blogCardInfo.map(({ alt, src, title, teg }) => (
        <div
          className="relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         dark:bg-neutral-700 w-[373px] text-center"
        >
          <div className="relative -mt-4 !mr-4 !ml-4 overflow-hidden rounded-lg !shadow-[0_2px_15px_-3px_#00000029,0_10px_20px_-2px_#0000001a]">
            <Image
              src={src}
              alt={alt}
              width={373}
              height={250}
              className="!w-full align-middle"
            />
            <Link href="/blog">
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </Link>
          </div>

          <div className="p-3">
            <p className="text-main text-right">{teg}</p>
            <h5 className="text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};
