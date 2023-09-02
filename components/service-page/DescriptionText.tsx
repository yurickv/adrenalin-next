export const DescriptionText = ({ title }: { title: string }) => {
  return (
    <div
      className="relative text-center bg-gradient-to-r from-red-500 to-orange-500 text-white
       -mt-12 md:-mt-4 lg:-mt-12 -mx-4 p-4
    after:content-[''] after:absolute after:block after:w-0 after:z-10 after:border-solid 
    after:border-y-hover after:border-x-white after:border-x-[12px] after:border-t-[12px] after:border-b-0
    after:-bottom-[12px] after:left-1/2 after:-ml-[12px]"
    >
      <h2 className="text-xl md:text-base lg:text-xl font-bold h-12">
        {title}
      </h2>
    </div>
  );
};
