import Image from "next/image";
import { Gallery } from "./components/layouts/gallery";
import { Services } from "./components/layouts/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        className=""
        src="/img/bg-landing-section.jpg"
        width={1440}
        height={732}
        alt="NW"
      />
      <div className="w-full h-[1240px] relative">
        <Image
          className="absolute left-0 top-0"
          src="/img/hexagons.png"
          width={900}
          height={600}
          alt="NW"
        />
      </div>
      <div className="relative h-[400px] w-full max-w-[898px]">
        <Image
          className="absolute"
          src="/img/nw.png"
          width={898}
          height={322}
          alt="NW"
        />
        <Image
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          src="/img/intro-car.png"
          width={520}
          height={392}
          alt="intro-car"
        />
      </div>
      <Services />
      <Gallery />
    </main>
  );
}
