import Image from "next/image";

export const Services = () => {
  return (
    <div>
      <h1 className="text-3xl">Services Section</h1>
      <div className="grid grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServicesImg key={i} img={`/img/service/service-${i + 1}.jpg`} />
        ))}
      </div>
    </div>
  );
};

const ServicesImg = ({ img }: { img: string }) => {
  return <Image src={img} width={213} height={190} alt="img" />;
};
