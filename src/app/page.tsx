import AboutSection from "./components/about-section";
import { GallerySection } from "./components/gallery-section";
import { LandingSection } from "./components/landing-section";
import { Navbar } from "./components/navbar";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between mx-auto overflow-x-hidden">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
    </main>
  );
}
