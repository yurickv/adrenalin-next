'use client';

import { useRouter } from 'next/navigation';
import { Arrow } from '../icons/Arrow-down';

type ButtonProps = {
  text: string;
  width?: string;
};

export const GoBackBtn: React.FC<ButtonProps> = ({ text, width }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div
      className="flex gap-2 text-main dark:text-orange-400 text-center rounded-full p-4 
     hover:bg-orange-100 dark:hover:bg-mainText transition-all duration-300 cursor-pointer"
    >
      <div className="-rotate-180   ">
        <Arrow />
      </div>
      <button onClick={handleGoBack} className={` ${width ? width : 'w-max'} `}>
        {text}
      </button>
    </div>
  );
};
