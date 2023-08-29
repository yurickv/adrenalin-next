export const DescriptionText = ({
  title,
  descr,
}: {
  title: string;
  descr: string;
}) => {
  return (
    <div className="text-left md:text-center lg:text-left">
      <h2 className="text-xl md:text-base lg:text-xl font-bold h-12">
        {title}
      </h2>
      <p className="text-base md:h-[120px] min-[1020px]:h-[72px] overflow-hidden">
        {descr}
      </p>
    </div>
  );
};
