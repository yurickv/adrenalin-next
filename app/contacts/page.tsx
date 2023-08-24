import { Insta } from '@/components/icons/Instagram';
import { Location } from '@/components/icons/Location';
import { Phone } from '@/components/icons/Phone';
import Link from 'next/link';

const Contacts = () => {
  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div className="sm:px-4 md:px-[42px] xl:px-[132px] lg:px-[66px] sm:py-[80px] md:py-[100px] xl:  lg:py-[100px] marker:mx-auto text-center ">
          <h3 className="my-11 text-left text-white">
            Головна сторінка <Link href="/">Adrenalin_gym</Link>
            <span className="font-semibold"> &gt; Контакти</span>
          </h3>
          <h1 className="title mb-14 text-white">Контакти</h1>
        </div>
      </section>
      <section className=" ">
        <div className="container xl:px-[132px] lg:px-[66px] py-[100px] mx-auto flex justify-between gap-6">
          <div className="flex flex-col gap-5">
            <Link
              href="https://goo.gl/maps/LJuXJQ9Kkhcb7FVT7"
              target="_blank"
              rel="noopener noreferrer"
              className="group  hover:text-hover transition-colors duration-300 text-main flex gap-4 items-center"
            >
              <Location />
              <span className="text-mainText  text-lg font-bold group-hover:text-hover transition-colors duration-300">
                м.Тернопіль, вул.Сахарова 10
              </span>
            </Link>

            <a
              href="tel:+380978836689"
              target="_blank"
              rel="noopener noreferrer"
              className="group  hover:text-hover transition-colors duration-300 text-main flex gap-4 items-center"
            >
              <Phone />
              <span className="text-mainText text-lg font-bold group-hover:text-hover transition-colors duration-300">
                +38 097 960 1371 <br /> +38 097 883 6689
              </span>
            </a>

            <Link
              href="https://www.instagram.com/gym.adrenalin/?hl=uk"
              target="_blank"
              rel="noopener noreferrer"
              className="group  hover:text-hover transition-colors duration-300 text-main flex gap-4 items-center"
            >
              <Insta />
              <span className="text-mainText text-lg font-bold group-hover:text-hover transition-colors duration-300">
                Gym.adrenalin
              </span>
            </Link>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4352.582420173576!2d25.640675527511817!3d49.55410347310727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473033e3dcc7a371%3A0x8253e4a830a8921d!2z0KLRgNC10L3QsNC20LXRgNC90LjQuSDQt9Cw0Lsg0JDQtNGA0LXQvdCw0LvRltC9!5e0!3m2!1suk!2sua!4v1692117465058!5m2!1suk!2sua"
            width="800"
            height="600"
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
