import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="w-4/5 lg:w-[70%] py-12 relative">
      <Image
        className="absolute -left-[65%] top-10 min-h-fit"
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

      <div className="pt-24">
        <div className="relative mx-auto h-[350px] sm:h-[453px] w-full max-w-[898px]">
          <Image
            className="absolute object-contain bottom-[40%] sm:bottom-1/4"
            src="/img/nw.png"
            width={898}
            height={322}
            alt="NW"
          />
          <Image
            className="absolute left-1/2 h-[70%] w-4/5 -translate-x-1/2 bottom-0 object-contain"
            src="/img/intro-car.png"
            width={520}
            height={392}
            alt="intro-car"
          />
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

      <Image
        className="absolute -right-[45%] -bottom-[25%] min-h-fit"
        src="/img/hexagons.png"
        width={805}
        height={601}
        alt="hexagons"
      />
    </div>
  );
}
