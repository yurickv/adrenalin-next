import { NavLinks } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { Insta } from "./icons/Instagram";
import { Phone } from "./icons/Phone";

export const Footer = () => {
  return (
    <footer className="">
      <div className="container flex items-center justify-between xl:px-[132px] lg:px-[66px]  mx-auto py-[88px] border-t-2 border-main">
        <Link
          className="flex items-center gap-2 text-main hover:text-hover transition-colors duration-300"
          href="/"
        >
          <Image
            src="/ADRENALIN_GYM.png"
            alt="Adrenalin Gym"
            width={217}
            height={22}
          />
        </Link>
        <nav className="!w-[220px] flex flex-col gap-6 ">
          <h3 className="font-bold">Клієнтам</h3>
          <ul className="flex flex-wrap justify-between gap-6 text-small  text-base ">
            {NavLinks.map((link) => (
              <li
                key={link.key}
                className={`flex items-center  hover:text-main font-poppins rounded-lg  hover:bg-orange-100 transition-colors duration-300`}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-6 justify-center">
          <h3 className="font-bold">Будь з нами на звязку</h3>
          <a
            href="tel:+38(097)8836689"
            className="flex gap-2 hover:text-hover transition-colors duration-300 text-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone />
            <span className="text-mainText">+38 097 960 1371</span>
          </a>
          <a
            href="https://www.instagram.com/gym.adrenalin/?hl=uk"
            className="flex gap-2 hover:text-hover transition-colors duration-300 text-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta />
            <span className="text-mainText">adrenalin.gym</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
