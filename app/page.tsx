import type { Metadata } from 'next';
import { AboutCalc } from '@/components/main-page/AboutCalc';
import { BlogSection } from '@/components/main-page/BlogSection';
import { GalerySection } from '@/components/main-page/GalerySection';
import { HeroSection } from '@/components/main-page/HeroSection';
import { Motivation } from '@/components/main-page/MotivationSection';
import { ServicesSection } from '@/components/main-page/ServicesSection';

export const metadata: Metadata = {
  title: 'Спортклуб в Тернополі Адреналін',
  description:
    'Просторий тренажерний зал Адреналін в місті Тернопіль на БАМі з помірними цінами',
};
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutCalc />
      {/* <BlogSection /> */}
      <Motivation />
      <GalerySection />
    </main>
  );
}
