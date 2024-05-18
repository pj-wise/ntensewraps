import AboutSection from "./components/about-section";
import { LandingSection } from "./components/landing-section";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between mx-auto overflow-x-hidden">
      <Navbar />

      <LandingSection />
      <AboutSection />

      {/* <Services />
      <Gallery />  */}
    </main>
  );
}
