"use client";

import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/const";
import { Barbell } from "./icons/Barbell";
import { Phone } from "./icons/Phone";
import { Insta } from "./icons/Instagram";

export const Header = () => {
  const params = usePathname();

  return (
    <header className="flex justify-around py-5 px-8 border-b  gap-4">
      <nav className="flex gap-10">
        <Link
          className="flex items-center gap-2 text-main hover:text-hover transition-colors duration-300"
          href="/"
        >
          <span>Adrenalin gym </span>
          {params === "/" && <Barbell />}
        </Link>
        <ul className="flex  text-small gap-7 text-base">
          {NavLinks.map((link) => (
            <li
              key={link.key}
              className={`flex items-center gap-2  hover:text-hover font-poppins rounded-lg px-3 py-2 hover:bg-orange-100 ${
                params === link.href ? "text-main" : ""
              } transition-colors duration-300`}
            >
              <Link href={link.href}>{link.text}</Link>
              {params === link.href && <Barbell />}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4 text-main">
        <a
          href="https://www.instagram.com/gym.adrenalin/?hl=uk"
          className=" hover:text-hover transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
        <a
          href="tel:+38(097)8836689"
          className=" hover:text-hover transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone />
        </a>
      </div>
    </header>
  );
};