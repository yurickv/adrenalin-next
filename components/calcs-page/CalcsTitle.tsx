import Link from 'next/link';
import { CalcLinks } from '@/const';
import { Arrow } from '../icons/Arrow-down';

type titleProps = {
  page?: number;
};

export const CalcTitle = ({ page }: titleProps) => {
  return (
    <div className="md:mt-8">
      <ul className="flex  flex-col md:flex-row md:gap-6 justify-center mb-12">
        {CalcLinks.map((link, i) => (
          <li
            key={link.key}
            className={`p-4 text-base md:text-lg font-medium  lg:font-semibold font-poppins group
             transition-all duration-300 md:w-[373px]  border-main text-mainText 
              hover:text-main dark:hover:text-mainTitleBlack hover:bg-orange-100 dark:hover:bg-mainText rounded-lg ${
                i === page
                  ? ' text-bolt bg-orange-200 dark:hover:text-mainTextBlack dark:text-mainText'
                  : ' border-b-2 dark:text-mainTextBlack'
              }`}
          >
            <Link href={link.href} className="flex justify-between">
              {link.text}
              <div
                className={` text-main  group-hover:rotate-0
              transition-all duration-300
              ${i === page ? ' -rotate-45' : 'rotate-45'}`}
              >
                <Arrow />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
