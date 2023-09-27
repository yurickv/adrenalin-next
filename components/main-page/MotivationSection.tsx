import { MotivationCard } from './MotivationSectionCard';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const Motivation = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
      <div className="div-container">
        <FadeIn>
          <h2 className="title text-mainTitle dark:text-mainTitleBlack">
            Про нас
          </h2>
        </FadeIn>
        <div className="mx-auto">
          <FadeIn>
            <div className="float-left relative hidden md:block h-[490px] w-[320px] lg:w-[470px] lg:h-[720px]">
              <Image
                placeholder="blur"
                blurDataURL="/placeholder.png"
                src="/bodybuilder.png"
                alt="Man with dumbells"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </FadeIn>
          <MotivationCard />
        </div>
      </div>
    </section>
  );
};
