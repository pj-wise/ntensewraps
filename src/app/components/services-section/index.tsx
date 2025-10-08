import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const services = [
    {
      title: "Full & Partial Commercial Wraps",
      imgSrc: "/img/commercial-car-1.webp",
      href: "/commercial-wraps"
    },
    {
      title: "Paint Protection Film (PPF)",
      imgSrc: "/img/car-img-1.webp",
      href: "/ppf"
    },
    { title: "Vinyl Wraps", imgSrc: "/img/red-car-1.webp", href: "/vinyl-wrap" },
    {
      title: "Architectural & Appliance Wraps",
      imgSrc: "/img/ref-img-1.jpg",
      href: "/architectural-wraps"
    },
    { title: "Ceramic Coating", imgSrc: "/img/car-img-5.webp", href: "/ceramic-coating" },
    {
      title: "Web Design",
      imgSrc: "/img/boat360-landing.png",
      href: "/web-design"
    },
  ];

  return (
    <div id="services" className="relative w-full layoutPadding pt-12 pb-10">
      <h3 className="text-3xl sm:text-5xl font-semibold text-center">
        What services do we offer?
      </h3>
      <div className="grid pt-8 gap-4 m grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-format max-sm:px-[10%] h-fit">
        {services.map(({ title, imgSrc, href }, index) => {
          return (
            <ServiceItem
              key={`service-${index}`}
              isSeeMore={false}
              title={title}
              imgSrc={imgSrc}
              href={href}
            />
          );
        })}
      </div>
      <p className="text-center text-sm max-w-[739px] mx-auto px-8 pt-4">
        <span className="text-primary">Ntense Car Wraps</span> specializes in
        car wrapping, detailing, and ceramic coating services, and {"we're"}{" "}
        accredited to{" "}
        <span className="text-destructive">System X Ceramic Protection</span>.
      </p>
    </div>
  );
};

export const ServiceItem = ({ isSeeMore, title, imgSrc, href }: ServiceItemProps) => {
  return (
    <Link href={href} className="hover:scale-[1.02] transition-transform">
    <div className="relative overflow-hidden text-base font-medium rounded-xl aspect-[5/3]">
      <div className="absolute line-clamp-1 z-20 bg-primary text-background opacity-90 left-0 right-0 p-3 sm:p-2 px-6 text-center">
        {title}
      </div>
      {isSeeMore ? (
        <div className="absolute z-10 bg-[hsla(0,0%,20%,0.8)] bottom-0 top-0 left-0 right-0 text-center flex items-center justify-center">
          <p className="mt-8 font-normal">SEE MORE</p>
        </div>
      ) : null}
      <Image src={imgSrc} fill className="object-fill" alt="Service Image" />
    </div>
    </Link>
  );
};

export interface ServiceItemProps {
  isSeeMore?: boolean;
  title: string;
  imgSrc: string;
  href: string;
}
