'use client';

import { ReactNode } from 'react';

export const PrevNextButton = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  return (
    <div
      className={`hidden md:flex gap-2 text-main dark:text-mainTextBlack 
      text-center rounded-full  p-4 
      transition-all duration-300 cursor-pointer`}
    >
      {title}
      {icon}
    </div>
  );
};
