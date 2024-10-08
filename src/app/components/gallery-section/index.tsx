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
    //windowTints: "window tints" as CategoryType,
  };
  const gallery = [
    { imgSrc: "/img/gallery/gallery-1.jpg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-2.jpeg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-3.jpeg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-4.jpeg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-5.jpeg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-6.jpeg", category: CATEGORIES.ppf },
    { imgSrc: "/img/gallery/gallery-7.jpeg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-8.jpeg", category: CATEGORIES.vinylWraps },
    { imgSrc: "/img/gallery/gallery-9.jpeg", category: CATEGORIES.ceramicCoating },
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
    <div
      id="gallery"
      className="relative py-5 pb-16 w-full layoutPadding text-center min-h-[700px]"
    >
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
      <div className="pt-12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative max-w-screen-lg">
        {filteredGallery.map(({ imgSrc }, index) => (
          <GalleryItem key={`galleryItem-${index}`} imgSrc={imgSrc} />
        ))}
      </div>
    </div>
  );
};

export const GalleryItem = ({ imgSrc }: GalleryItemProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-square">
      <Image src={imgSrc} alt="Image Item" fill className="object-cover" />
    </div>
  );
};

export interface GalleryItemProps {
  imgSrc: string;
}
