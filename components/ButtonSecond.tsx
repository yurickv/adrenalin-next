import Link from 'next/link';

type ButtonProps = {
  route: string;
  text: string;
  width?: string;
};

export const ButtonSecond = ({ route, text, width }: ButtonProps) => {
  return (
    <Link
      href={route}
      className={`bg-orange-100 hover:bg-orange-200 dark:bg-[#a3a3a3] dark:hover:bg-[#d4d4d4]
      text-mainTitle
      rounded-xl p-4  text-center block 
       ${width ? width : 'w-max'} transition-all duration-150`}
    >
      {text}
    </Link>
  );
};
