import Image from "next/image";
export const ServicesSection = () => {
  const services = [
    {
      title: "Full & Partial Commercial Wraps",
      imgSrc: "/img/service/service-1.jpg",
    },
    {
      title: "Cosmetic Paint Protection",
      imgSrc: "/img/service/service-2.jpg",
    },
    { title: "Color Change Wraps", imgSrc: "/img/service/service-3.jpg" },
    {
      title: "Interior/Exterior Detailing",
      imgSrc: "/img/service/service-4.jpg",
    },
    { title: "Paint Correction", imgSrc: "/img/service/service-5.jpg" },
    {
      title: "Taillight/Headlight Tinting",
      imgSrc: "/img/service/service-6.jpg",
    },
  ];

  return (
    <div id="services" className="relative w-full layoutPadding pt-12 pb-10">
      <h3 className="text-3xl sm:text-5xl font-semibold text-center">
        What services do we offer?
      </h3>
      <div className="grid pt-8 gap-4 m grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-format max-sm:px-[10%] h-fit">
        {services.map(({ title, imgSrc }, index) => {
          return (
            <ServiceItem
              key={`service-${index}`}
              isSeeMore={false}
              title={title}
              imgSrc={imgSrc}
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

export const ServiceItem = ({ isSeeMore, title, imgSrc }: ServiceItemProps) => {
  return (
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
  );
};

export interface ServiceItemProps {
  isSeeMore?: boolean;
  title: string;
  imgSrc: string;
}
