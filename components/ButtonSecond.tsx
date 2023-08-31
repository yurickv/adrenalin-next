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
      hover:from-red-500 hover:to-orange-500 focus:from-red-500 focus:to-orange-500 
      text-mainText hover:text-white focus:text-white
      rounded-full p-4  text-center block 
      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      shadow-[0_4px_9px_-4px_#3b71ca] ${
        width ? width : 'w-max'
      } transition-all duration-200`}
    >
      {text}
    </Link>
  );
};
