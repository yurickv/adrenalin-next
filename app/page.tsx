import { AboutCalc } from "@/components/main-page/AboutCalc";
import { Hero } from "@/components/main-page/hero";
import { Motivation } from "@/components/main-page/motivation";
import { ServicesSection } from "@/components/main-page/Services";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Motivation />
      <AboutCalc />
      <ServicesSection />
    </main>
  );
}
