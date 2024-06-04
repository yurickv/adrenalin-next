import type { Metadata } from 'next';
import { AboutCalc } from '@/components/main-page/AboutCalc';
import { BlogSection } from '@/components/main-page/BlogSection';
import { GalerySection } from '@/components/main-page/GalerySection';
import { HeroSection } from '@/components/main-page/HeroSection';
import { Motivation } from '@/components/main-page/MotivationSection';
import { ServicesSection } from '@/components/main-page/ServicesSection';

export const metadata: Metadata = {
  title: 'Спортзал в Тернополі Адреналін',
  description:
    'Просторий тренажерний зал (спортзал) Адреналін в м.Тернопіль в мікрорайоні БАМ з помірними цінами на абонементи. Сучасні тренажери, персональний тренер (тренування, харчування, всебічна підтримка), система знижок на абонементи. Спортзал',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      'max-snippet': -1,
    },
  },
};
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutCalc />
      <BlogSection />
      <Motivation />
      <GalerySection />
    </main>
  );
}
