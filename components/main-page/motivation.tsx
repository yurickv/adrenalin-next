import { MotivationCard } from "./MotivationCard";
import Image from "next/image";

export const Motivation = () => {
  return (
    <section className="py-[88px]">
      <div className="container xl:px-[132px] lg:px-[66px] text-center mx-auto">
        <h2 className="title">Про нас</h2>
        <div className="flex gap-2 mt-14">
          <Image
            src="/bodybuilder.jpg"
            alt="Man with dumbells"
            width={473}
            height={616}
          />
          <MotivationCard />
        </div>
      </div>
    </section>
  );
};
