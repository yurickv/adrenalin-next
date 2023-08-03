import { MotivationCard } from "./motivation-card";
import Image from "next/image";

export const Motivation = () => {
  return (
    <section className="py-[88px]">
      <div className="container px-[136px] text-center mx-auto">
        <h2 className="text-5xl font-bold">Про нас</h2>
        <div className="flex gap-6 mt-14">
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
