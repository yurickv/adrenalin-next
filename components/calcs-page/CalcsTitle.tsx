import Link from 'next/link';
import { CalcLinks } from '@/const';
import { Arrow } from '../icons/Arrow-down';

type titleProps = {
  page?: number;
};

export const CalcTitle = ({ page }: titleProps) => {
  return (
    <div className="flex justify-around gap-4">
      <ul className="flex   gap-7 mb-12">
        {CalcLinks.map((link, i) => (
          <li
            key={link.key}
            className={`p-4 text-lg font-medium font-poppins group
             transition-colors duration-300 w-[373px]  border-main text-mainText
              hover:text-hover  hover:bg-orange-100  ${
                i === page ? ' text-bolt border-2' : ' border-b-2'
              }`}
          >
            <Link href={link.href} className="flex justify-between">
              {link.text}
              <div className="rotate-45 text-main group-hover:text-hover ">
                <Arrow />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
