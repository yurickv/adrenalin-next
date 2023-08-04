import { Button } from "../Button";
import { BlogSectionCard } from "./BlogSectionCard";

export const BlogSection = () => {
  return (
    <section className="py-[88px] ">
      <div className="container xl:px-[132px] lg:px-[66px]  mx-auto text-center">
        <h3 className="title">Останні статті</h3>
        <div className="flex gap-6 mt-14">
          <BlogSectionCard />
        </div>
        <Button
          route="/blog"
          text="Більше статтей..."
          width="inline-block w-[302px] mt-11"
        />
      </div>
    </section>
  );
};
