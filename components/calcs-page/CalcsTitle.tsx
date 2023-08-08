import Link from "next/link";
import { CalcLinks } from "@/const";
import { Arrow } from "../icons/Arrow-down";

export const CalcTitle = () => {
  return (
    <div className="flex justify-around gap-4">
      <ul className="flex  text-small gap-7 text-base mb-12">
        {CalcLinks.map((link) => (
          <li
            key={link.key}
            className={`flex items-center gap-2 p-4 text-lg font-medium hover:text-hover font-poppins   hover:bg-orange-100 
             transition-colors duration-300 w-[373px] border-b-2 border-main`}
          >
            <Link href={link.href}>
              {link.text}
              <div className=" text-main rotate-45">
                <Arrow />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
