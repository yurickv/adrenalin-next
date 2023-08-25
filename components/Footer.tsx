'use client';
import { NavLinks } from '@/const';
import Image from 'next/image';
import Link from 'next/link';
import { Insta } from './icons/Instagram';
import { Phone } from './icons/Phone';
import { Popover, Transition } from '@headlessui/react';
import { ShevronDown } from './icons/forPopMenu/Shevron';
import { Fragment } from 'react';
import { AdrenalinIcon } from './icons/logo/AdrenalinIcon';
import { GymIcon } from './icons/logo/GymIcon';
import { BarbellIcon } from './icons/logo/BarbellIcon';

export const Footer = () => {
  const products = [
    { name: 'Індекс маси тіла', href: '/calcs/imt-calculator' },
    { name: 'Відсоток жиру в тілі', href: '/calcs/fat-calculator' },
    {
      name: 'Потреба калорій',
      href: '/calcs/calories-calculator',
    },
  ];

  return (
    <footer className="">
      <div
        className="grid grid-cols-2 gap-10 justify-start justify-items-center md:grid-cols-none
        md:flex md:items-center md:justify-between   mx-auto border-t-2 border-main
      sm:max-w-[640px] md:max-w-[1279px] lg:max-w-[1439px] xl:max-w-[1919px] 
      py-[40px] md:pt-[44px] md:pb-[88px] lg:py-[88px] 
      sm:px-4 md:px-[40px] lg:px-[66px] xl:px-[132px]"
      >
        <Link
          className="transition-colors duration-300 col-span-2 flex md:flex-col gap-3 md:gap-2  md:items-center"
          href="/"
        >
          <span className="sr-only md:not-sr-only">
            <BarbellIcon />
          </span>
          <AdrenalinIcon />
          <GymIcon />
        </Link>
        <nav className="md:!w-[220px] flex flex-col gap-6">
          <h3 className="ml-2 font-bold">Клієнтам</h3>
          <ul className="md:flex md:flex-wrap md:justify-between gap-4 text-small  text-base ">
            <Popover className="relative">
              <Popover.Button
                className=" group flex items-center gap-x-1 font-poppins hover:text-main hover:bg-orange-100
             text-mainText rounded-lg p-2 outline-none"
              >
                Калькулятори
                <div className="h-5 w-5 flex-none text-gray-400 group-hover:text-main">
                  <ShevronDown aria-hidden="true" />
                </div>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute  top-full z-10 mt-2 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300">
                  <div className=" p-2">
                    {products.map(item => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-6 hover:bg-orange-100"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-mainText"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            {NavLinks.map(link => (
              <li
                key={link.key}
                className={`flex items-center  hover:text-main font-poppins rounded-lg p-2 hover:bg-orange-100 transition-colors duration-300`}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-6 lg:justify-center">
          <h3 className="font-bold ml-2">Будь з нами на звязку</h3>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+38(097)8836689"
              className="flex gap-2 items-center group hover:text-main font-poppins rounded-lg p-2 hover:bg-orange-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-main group-hover:text-main">
                <Phone />
              </span>
              <span className="text-mainText group-hover:text-main">
                +38 097 960 1371
              </span>
            </a>
            <a
              href="https://www.instagram.com/gym.adrenalin/?hl=uk"
              className="flex gap-2 items-center group hover:text-main font-poppins rounded-lg p-2 hover:bg-orange-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-main group-hover:text-main">
                <Insta />
              </span>
              <span className="text-mainText group-hover:text-main font-poppins">
                adrenalin.gym
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
