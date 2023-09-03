import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import SceletonCard from '@/components/sceleton/SceletonCard';
import Link from 'next/link';

export default function Loading() {
  return (
    <>
      <section className="bg-gray-300 bg-center bg-cover ">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5">
          <h3 className="text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Послуги</span>
          </h3>
          <h1 className="title mb-14 text-white">Послуги</h1>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px]">
        <div
          className="div-container flex flex-col md:grid  md:grid-cols-3 
          gap-6 md:gap-x-4 lg:gap-x-6 md:gap-y-8 lg:gap-y-11"
        >
          <SceletonCard />
          <SceletonCard />
          <SceletonCard />
        </div>
      </section>
    </>
  );
}
