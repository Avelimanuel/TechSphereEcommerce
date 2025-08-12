"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const SingleProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="w-full aspect-square overflow-hidden rounded-xl border shadow-sm">
        <Image
          src={images[currentImage]}
          alt="product image"
          width={1000}
          height={1000}
          className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentImage(index)}
            className={cn(
              "flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 hover:border-orange-500 hover:shadow-md",
              currentImage === index
                ? "border-orange-600 shadow-md"
                : "border-transparent"
            )}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover w-20 h-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleProductImages;
