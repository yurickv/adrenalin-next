type ButtonProps = {
  type: string;
  text: string;
  width?: string;
};

export const Button = ({ type, text, width }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-gradient-to-l from-main to-hover hover:bg-gradient-to-r rounded-2xl p-4 text-white ${
        width ? `w-${width}` : ""
      }`}
    >
      {text}
    </button>
  );
};
