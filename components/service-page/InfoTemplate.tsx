export const InfoTemplate = ({ title, data }) => {
  return (
    <div
      className="px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
      hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] rounded-lg flex flex-col gap-6 hover:shrink basis-1/3"
    >
      <h2 className="text-xl md:text-base lg:text-xl font-bold h-12 text-center">
        {title}
      </h2>
      <ul>
        {data.map(({ descript, price }) => (
          <li className="flex justify-between border-b-2 border-main p-2">
            <p>{descript}</p>
            <span className="font-semibold">{price} &#8372;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
