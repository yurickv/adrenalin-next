import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="py-[40px] md:py-[44px] lg:py-[88px]">
        <div className="div-container relative mx-auto md:col-span-2 lg:col-span-3">
          <div className="relative h-[400px]  w-[340px] md:h-[490px] md:w-[720px] lg:w-[1070px] lg:h-[720px] ">
            <Image
              src="/man-fitness-404.jpg"
              alt="Man with dumbells"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="absolute left-20 top-5 md:top-1/4 text-white flex flex-col gap-8">
            <p className="  md:text-xl lg:text-2xl font-bold">
              Упс.
              <br className="md:hidden" /> Ми не знайшли <br /> сторінку, яку ви
              шукали
            </p>
            <p>Тим часом...</p>
            <ul className="flex flex-col gap-2 decoration-1">
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
      </section>
    </main>
  );
}
