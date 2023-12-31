import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
        <div className="div-container relative mx-auto  md:pl-[80px]">
          <div className="bg-white dark:bg-darkBody absolute inset-y-0 left-0 z-10 -skew-x-12 md:w-[350px] lg:w-[450px]"></div>
          <div className="md:absolute left-20 top-5 md:top-1/4 text-mainText dark:text-mainTextBlack  z-20">
            <div className="flex flex-col gap-8 text-center">
              <p className="  md:text-xl lg:text-2xl font-bold">
                Упс.
                <br className="md:hidden" /> Ми не знайшли <br /> сторінку, яку
                ви шукали
              </p>
              <p>Тим часом...</p>
              <ul className="flex flex-col gap-2 underline decoration-1 text-lg text-mainTitle dark:text-mainTitleBlack">
                <li>
                  <Link href="/">Повернутись на головну</Link>
                </li>
                <li>
                  <Link href="/calcs">Визначити свою форму</Link>
                </li>
                <li>
                  <Link href="/services">Замовити послуги</Link>
                </li>
                <li>
                  <Link href="/blog">Почитати блог</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px]  w-full md:h-[720px] ">
            <Image
              src="/man-fitness-404.webp"
              alt="404 Man with dumbells"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
