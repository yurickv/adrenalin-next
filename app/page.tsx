import type { Metadata } from 'next';
import { AboutCalc } from '@/components/main-page/AboutCalc';
import { BlogSection } from '@/components/main-page/BlogSection';
import { GalerySection } from '@/components/main-page/GalerySection';
import { HeroSection } from '@/components/main-page/HeroSection';
import { Motivation } from '@/components/main-page/MotivationSection';
import { ServicesSection } from '@/components/main-page/ServicesSection';

export const metadata: Metadata = {
  title: 'Adrenalin Gym',
  description: 'Work hard or go home',
};
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Motivation />
      <BlogSection />
      <AboutCalc />
      <ServicesSection />
      <GalerySection />
    </main>
  );
}
