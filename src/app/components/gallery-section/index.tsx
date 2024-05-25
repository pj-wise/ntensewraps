"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export type CategoryType =
  | "all"
  | "ppf"
  | "vinyl wraps"
  | "ceramic coating"
  | "window tints";

export const GallerySection = () => {
  const CATEGORIES = {
    all: "all" as CategoryType,
    ppf: "ppf" as CategoryType,
    vinylWraps: "vinyl wraps" as CategoryType,
    ceramicCoating: "Ceramic Coating" as CategoryType,
    windowTints: "window tints" as CategoryType,
  };
  const gallery = [
    { imgSrc: "/img/gallery/gallery-1.jpg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-2.jpg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-3.jpg", category: CATEGORIES.ppf },
    {
      imgSrc: "/img/gallery/gallery-4.jpg",
      category: CATEGORIES.ceramicCoating,
    },
    { imgSrc: "/img/gallery/gallery-5.jpg", category: CATEGORIES.windowTints },
    {
      imgSrc: "/img/gallery/gallery-6.jpg",
      category: CATEGORIES.ceramicCoating,
    },
    { imgSrc: "/img/gallery/gallery-7.jpg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-8.jpg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-9.jpg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-10.jpg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-11.jpg", category: CATEGORIES.windowTints },
    { imgSrc: "/img/gallery/gallery-12.jpg", category: CATEGORIES.vinylWraps },
  ];
  const [filteredGallery, setFilteredGallery] = useState([...gallery]);
  const [category, setCategory] = useState<CategoryType>(
    CATEGORIES.all as CategoryType
  );
  const handleCategoryClick = (category: CategoryType) => {
    setCategory(category);
    if (category === CATEGORIES.all) {
      setFilteredGallery([...gallery]);
    } else {
      setFilteredGallery(
        gallery.filter((item) => item.category.match(category))
      );
    }
  };

  return (
    <div className="h-screen relative w-full layoutPadding text-center">
      <h1 className="font-bold text-3xl sm:text-5xl">GALLERY</h1>
      <div className="py-3 flex flex-wrap gap-3 sm:gap-6 justify-center">
        {Object.values(CATEGORIES).map((val) => (
          <button
            key={val}
            onClick={() => {
              handleCategoryClick(val);
            }}
            className={cn(
              "bottomUnderline py-1 px-0.5 text-base uppercase md:text-xl whitespace-nowrap min-w-fit",
              {
                "after:w-full": category === val,
              }
            )}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="pt-12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative max-w-screen-lg">
        {filteredGallery.map(({ imgSrc }, index) => (
          <GalleryItem key={`galleryItem-${index}`} imgSrc={imgSrc} />
        ))}
      </div>
    </div>
  );
};

export const GalleryItem = ({ imgSrc }: GalleryItemProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-video w-[clamp(10rem, 13rem,17rem)]">
      <Image src={imgSrc} alt="Image Item" fill className="object-fill" />;
    </div>
  );
};
export interface GalleryItemProps {
  imgSrc: string;
}
