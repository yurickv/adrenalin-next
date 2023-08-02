type ButtonProps = {
  type: string;
  text: string;
  width?: string;
};

export const Button = ({ type, text, width }: ButtonProps) => {
  let widthButton = "";
  if (width) {
    widthButton = `w-[${width}]`;
  }

  return (
    <button
      type={type}
      className={`bg-gradient-to-l from-main to-hover hover:bg-gradient-to-r rounded-2xl p-4 text-white  ${
        widthButton ? widthButton : "w-max"
      } `}
    >
      {text}
    </button>
  );
};
