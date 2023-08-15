interface Props {
  text: string;
  max: number;
  min: number;
  value: number;
  setAny: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string | null;
}

export const InputSkeleton = ({
  text,
  max,
  min,
  value,
  setAny,
  onBlur,
  error,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-7 items-center">
        <label htmlFor={text} className="font-bold">
          {text}
        </label>
        <div className="relative flex pb-1">
          <input
            max={max}
            min={min}
            value={value}
            name={text}
            onChange={setAny}
            type="number"
            onBlur={onBlur}
            className="font-bold rounded-lg border-mainText border-2 p-2 text-center w-[120px] hover:border-main focus:border-main outline-none"
          />
          {error && (
            <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-lg w-[100px]">
              {error}
            </p>
          )}
        </div>
      </div>

      <input
        max={max}
        min={min}
        name={text}
        value={value}
        onChange={setAny}
        type="range"
        onBlur={onBlur}
        className="bg-[#D9D9D9] appearance-none rounded-full  outline-none overflow-hidden"
      />
    </div>
  );
};
