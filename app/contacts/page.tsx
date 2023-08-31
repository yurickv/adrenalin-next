import { Insta } from '@/components/icons/Instagram';
import { Location } from '@/components/icons/Location';
import { Phone } from '@/components/icons/Phone';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import Link from 'next/link';

const Contacts = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5">
          <h3 className="text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Контакти</span>
          </h3>
          <h1 className="title mb-14 text-white">Контакти</h1>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px]">
        <div
          className="div-container flex flex-col 
        md:flex-row justify-between gap-6"
        >
          <div className="max-[449px]:text-center min-[450px]:flex gap-4 justify-between md:block">
            <div className="flex flex-col gap-5  max-[449px]:mx-auto max-w-[205px] md:max-w-full">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                Де нас знайти?
              </p>
              <Link
                href="https://goo.gl/maps/LJuXJQ9Kkhcb7FVT7"
                target="_blank"
                rel="noopener noreferrer"
                className="group   transition-colors duration-300 text-main flex gap-4 items-center"
              >
                <Location />
                <span className="text-mainText  text-lg  group-hover:text-main transition-colors duration-300">
                  м.Тернопіль, вул.Сахарова 10
                </span>
              </Link>

              <Link
                href="tel:+380978836689"
                target="_blank"
                rel="noopener noreferrer"
                className="group   transition-colors duration-300 text-main flex gap-4 items-center"
              >
                <Phone />
                <span className="text-mainText text-lg  group-hover:text-main transition-colors duration-300 ">
                  +38 097 960 1371 <br /> +38 097 883 6689
                </span>
              </Link>

              <Link
                href="https://www.instagram.com/gym.adrenalin/?hl=uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group   transition-all duration-200  flex gap-4 items-center"
              >
                {' '}
                <div className=" text-main">
                  <Insta />
                </div>
                <span
                  className=" text-lg  text-mainText 
                 transition-all duration-200 group-hover:text-main"
                >
                  Gym.adrenalin
                </span>
              </Link>
            </div>
            <div className="max-[449px]:mt-5 md:">
              <p className="font-semibold">Графік роботи:</p>
              <ul className="mt-4">
                <li>
                  <span className="font-semibold">пн, ср, пт</span> —
                  11:00-20:00
                </li>
                <li>
                  <span className="font-semibold">вт, чт </span> — 11:00-21:00
                </li>
                <li>
                  <span className="font-semibold">сб</span> — 12:00-19:00
                </li>
                <li>
                  <span className="font-semibold">нд</span> — вихідний
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[300px] md:h-[450px] lg:h-[600px] w-full">
            <iframe
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4352.582420173576!2d25.640675527511817!3d49.55410347310727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473033e3dcc7a371%3A0x8253e4a830a8921d!2z0KLRgNC10L3QsNC20LXRgNC90LjQuSDQt9Cw0Lsg0JDQtNGA0LXQvdCw0LvRltC9!5e0!3m2!1suk!2sua!4v1692117465058!5m2!1suk!2sua"
              width="800"
              height="600"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
