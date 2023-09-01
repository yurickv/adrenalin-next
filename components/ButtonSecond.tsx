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
      className={`border-main border-2 border-solid bg-gradient-to-r 
     hover:from-orange-200 hover:to-yellow-100 focus:from-orange-200 focus:to-yellow-100 
      text-mainText hover:text-main focus:text-main
      rounded-full p-4  text-center block 
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      shadow-[0_4px_9px_-4px_#3b71ca] ${
        width ? width : 'w-max'
      } transition-all duration-150`}
    >
      {text}
    </Link>
  );
};
