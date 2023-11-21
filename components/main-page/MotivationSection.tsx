import { MotivationCard } from './MotivationSectionCard';
import Image from 'next/image';
import picture from '../../public/bodybuilder.webp';

export const Motivation = () => {
  return (
    <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
      <div className="div-container">
        <h2 className="title text-mainTitle dark:text-mainTitleBlack">
          Про нас
        </h2>

        <div className="mx-auto">
          <div className="float-left relative hidden md:block h-[490px] w-[320px] lg:w-[470px] lg:h-[720px]">
            <Image
              src={picture}
              alt="Man with dumbells"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <MotivationCard />
        </div>
      </div>
    </section>
  );
};
