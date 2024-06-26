import Link from 'next/link';
import { CalcLinks } from '@/const';
import { Arrow } from '../icons/Arrow-down';

type titleProps = {
  page?: number;
};

export const CalcTitle = ({ page }: titleProps) => {
  return (
    <ul className="flex  flex-col md:flex-row md:gap-6 justify-center mb-12">
      {CalcLinks.map((link, i) => (
        <li
          key={link.key}
          className={`p-4 text-base md:text-lg font-medium  lg:font-semibold font-poppins group
             transition-all duration-300 md:w-[373px]  border-main text-mainText 
              hover:text-main dark:hover:text-mainTitleBlack hover:bg-orange-100 dark:hover:bg-mainText rounded-xl ${
                i === page
                  ? ' text-bolt bg-orange-200 text-mainTitle dark:hover:text-mainTextBlack'
                  : ' border-b-2 dark:text-mainTextBlack'
              }`}
        >
          <Link
            href={link.href}
            prefetch={true}
            className="flex justify-between"
          >
            {link.text}
            <div
              className={` text-main  ${page ? '' : 'group-hover:rotate-0'} 
                 transition-all duration-300
              ${i === page ? ' -rotate-45' : 'rotate-45'}`}
            >
              <Arrow />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
