import { AboutCalc } from "@/components/main-page/AboutCalc";
import { BlogSection } from "@/components/main-page/BlogSection";
import { HeroSection } from "@/components/main-page/HeroSection";
import { Motivation } from "@/components/main-page/Motivation";
import { ServicesSection } from "@/components/main-page/ServicesSection";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Motivation />
      <AboutCalc />
      <ServicesSection />
      <BlogSection />
    </main>
  );
}
