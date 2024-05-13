import Image from "next/image";
import Link from "next/link";
import { IntroCar } from "../intro-car";

export default function AboutSection() {
  return (
    <div className="py-12 relative">
      <Image
        className="absolute -left-[452px] top-10 min-h-fit"
        src="/img/hexagons.png"
        width={805}
        height={601}
        alt="hexagons"
      />
      <Image
        className="absolute -right-[452px] -bottom-[25%] min-h-fit"
        src="/img/hexagons.png"
        width={805}
        height={601}
        alt="hexagons"
      />
      <div className="flex flex-wrap justify-between">
        <div className="font-bold">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl">INTRODUCING</h3>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-primary">PPF</h1>
        </div>
        <p className="max-w-md text-xs sm:text-sm lg:text-base font-normal ml-auto w-3/5">
          Specializing in full and partial commercial wraps, color change wraps,
          cosmetic PPF (Paint Protection Film), detailing for both interior and
          exterior, paint correction, plus tail and headlight tinting.
        </p>
      </div>

      <div className="pt-6 sm:pt-24">
        <div className="relative mx-auto h-[300px] sm:h-[453px] w-full max-w-[898px]">
          <Image
            className="absolute object-contain bottom-1/4"
            src="/img/nw.png"
            width={898}
            height={322}
            alt="NW"
          />
          <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
            <IntroCar />
          </div>
        </div>
      </div>

      <p className="text-muted-foreground font-medium text-xs sm:text-sm tracking-[2%] pt-7 sm:pt-14">
        Let <span className="text-primary">Ntense Car Wraps</span> shield your
        vehicle with our premium Paint Protection Film. Experience peace of mind
        knowing your car is protected against the rigors of daily driving, all
        while maintaining that showroom shine.{" "}
        <Link href="#contact-us" className="text-primary">
          Contact us
        </Link>{" "}
        today to learn more about our PPF options and how we can help protect
        your investment.
      </p>
    </div>
  );
}