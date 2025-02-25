"use client";

import { useMemo } from "react";
import photos from "./photoData";
import Image from "next/image";
import Link from "next/link";
import { useColumns } from "./useColumns";

const Page = () => {
  const columns = useColumns();

  const columnPhotos = useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });
    return cols;
  }, [columns]);

  return (
    <div className="container mx-auto px-4 py-16 mt-52">
      <div className="flex justify-center gap-x-6">
        {columnPhotos.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-y-6">
            {column.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <Link href={`/galery/${encodeURIComponent(photo.alt)}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={300}
                    height={300}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={photo.blurDataURL}
                    className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
