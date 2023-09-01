'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import { NavLinks } from '@/const';
import { Barbell } from './icons/Barbell';
import { Phone } from './icons/Phone';
import { Insta } from './icons/Instagram';
import Image from 'next/image';
import { BurgerMenu } from './icons/BurgerMenu';
import { ShevronDown } from './icons/forPopMenu/Shevron';
import { IMTCalcIcon } from './icons/forPopMenu/IMTCalcIcon';
import { FatCalcIcon } from './icons/forPopMenu/FatCalcIcon';
import { CaloriesCalcIcon } from './icons/forPopMenu/CaloriesCalcIcon';
import { XMarkIcon } from './icons/XMarkIcon';
import { HomeIcon } from './icons/forPopMenu/HomeIcon';
import { Search } from '@/components/Search';
import { AdrenalinIcon } from './icons/logo/AdrenalinIcon';
import { GymIcon } from './icons/logo/GymIcon';

export const Header = () => {
  const params = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const calcHeader = [
    {
      name: 'Індекс маси тіла',
      description: 'Калькулятор для визначення індексу маси тіла',
      href: '/calcs/imt-calculator',
      icon: <IMTCalcIcon />,
    },
    {
      name: 'Відсоток жиру в тілі',
      description: 'Калькулятор для визначення відсотку жиру в тілі',
      href: '/calcs/fat-calculator',
      icon: <FatCalcIcon />,
    },
    {
      name: 'Потреба калорій',
      description: 'Калькулятор для визначення денної потреби калорій',
      href: '/calcs/calories-calculator',
      icon: <CaloriesCalcIcon />,
    },
  ];

  return (
    <header
      className="sm:max-w-[640px] md:max-w-[1279px] lg:max-w-[1439px] xl:max-w-[1919px]
    sm:px-4 md:px-[40px] lg:px-[66px] xl:px-[132px]
    flex justify-between items-center py-5 border-b  gap-4 mr-auto ml-auto "
    >
      <nav className="flex  md:gap-5 lg:gap-10">
        <Link
          className="flex items-center gap-2 text-main hover:text-hover transition-colors duration-300"
          href="/"
        >
          <span className="sr-only">Adrenalin gym</span>
          <div className="flex flex-col items-center">
            <AdrenalinIcon />
            <GymIcon />
          </div>
          {params === '/' && <Barbell />}
        </Link>

        <Popover.Group className="hidden md:flex md:gap-x-2 lg:gap-x-7">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? 'bg-orange-100 !text-main' : ''}
                  group flex items-center gap-1 font-poppins hover:text-main hover:bg-orange-100
             text-mainText rounded-lg px-3 py-2 outline-none`}
                >
                  Калькулятори
                  <div
                    className={`
                ${
                  open ? 'bg-orange-100 !text-main rotate-180' : ''
                } h-5 w-5 flex-none text-mainText group-hover:text-main`}
                  >
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
                  <Popover.Panel className="absolute -left-1/2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300">
                    <div className="p-4">
                      {calcHeader.map(item => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-orange-100"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-orange-100 group-hover:bg-white">
                            <div
                              className="h-6 w-6 text-gray-600 group-hover:text-main"
                              aria-hidden="true"
                            >
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-mainText hover:text-main"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <ul className="flex  text-small md:gap-2 lg:gap-7 text-base">
            {NavLinks.map(link => (
              <li
                key={link.key}
                className={`flex items-center gap-2  hover:text-main font-poppins rounded-lg px-3 py-2 hover:bg-orange-100 ${
                  params === link.href ? 'text-main' : ''
                } transition-colors duration-300 cursor-pointer`}
              >
                <Link href={link.href}>{link.text}</Link>
                {params === link.href && <Barbell />}
              </li>
            ))}
          </ul>
        </Popover.Group>
      </nav>
      <div className="flex  md:hidden hover:text-main">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <BurgerMenu aria-hidden="true" />
        </button>
      </div>

      <div className=" hidden md:flex md:gap-4 text-main relative">
        <Search search={search} />
        <a
          href="https://www.instagram.com/gym.adrenalin/?hl=uk"
          className=" hover:text-hover transition-colors duration-300 cursor-pointer peer-focus:hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
        <a
          href="tel:+38(097)8836689"
          className=" hover:text-hover transition-colors duration-300 cursor-pointer peer-focus:hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone />
        </a>
      </div>
      <Dialog
        as="div"
        className="z-50 md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="-m-1.5 p-1.5 flex gap-2 items-center text-main"
            >
              <HomeIcon />
              <span className="sr-only">Adrenalin Gym</span>
              <div className="relative w-[150px] h-[17px] ">
                <Image
                  src="/ADRENALIN_GYM.png"
                  alt="Adrenalin Gym"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-mainText"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <div></div>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={` ${
                          open ? 'bg-orange-100 !text-main' : ''
                        } flex w-full items-center justify-between rounded-lg py-2 
                      pl-3 pr-3.5 text-base font-semibold leading-7 text-mainText hover:bg-orange-100 hover:text-main`}
                      >
                        Калькулятори
                        <div
                          className={` ${open ? 'rotate-180' : ''}
                            h-5 w-5 flex-none`}
                        >
                          <ShevronDown aria-hidden="true" />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...calcHeader].map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7
                             text-mainText hover:bg-orange-100 hover:text-main"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-mainText hover:bg-orange-100 hover:text-main"
                >
                  Блог
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-mainText hover:bg-orange-100 hover:text-main"
                >
                  Послуги
                </Link>
                <Link
                  href="/contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-mainText hover:bg-orange-100 hover:text-main"
                >
                  Контакти
                </Link>
              </div>
              <div className="py-10 flex gap-8 text-main items-center justify-center">
                <a
                  href="https://www.instagram.com/gym.adrenalin/?hl=uk"
                  className=" hover:text-hover transition-colors duration-300 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Insta />
                </a>
                <a
                  href="tel:+38(097)8836689"
                  className=" hover:text-hover transition-colors duration-300 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone />
                </a>
                <Search
                  search={search}
                  handleCloseMobileMenu={setMobileMenuOpen}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
