import Image from "next/image";

export const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl">Gallery Section</h1>
      <div className="grid grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <GalleryImg key={i} img={`/img/gallery/gallery-${i + 1}.jpg`} />
        ))}
      </div>
    </div>
  );
};

const GalleryImg = ({ img }: { img: string }) => {
  return <Image src={img} width={213} height={190} alt="img" />;
};
