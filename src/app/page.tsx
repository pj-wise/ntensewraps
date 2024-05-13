import AboutSection from "./components/about-section";

export default function Home() {
  return (
    <main className="flex min-h-screen px-[5%] md:px-[10%] flex-col items-center justify-between mx-auto overflow-x-hidden">
      <AboutSection />

      {/* <Services />
      <Gallery />  */}
    </main>
  );
}
