import Link from 'next/link';

type ButtonProps = {
  route: string;
  text: string;
  width?: string;
};

export const Button = ({ route, text, width }: ButtonProps) => {
  return (
    <Link
      href={route}
      className={`bg-gradient-to-l from-main to-hover opacity-90 rounded-full hover:opacity-100 p-4 text-white text-center block active:bg-primary-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_#3b71ca] ${
        width ? width : 'w-max'
      } transition-all duration-300`}
    >
      {text}
    </Link>
  );
};
