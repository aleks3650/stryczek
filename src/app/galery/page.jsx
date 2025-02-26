"use client";
import { motion, AnimatePresence } from "framer-motion";
import photos from "./photoData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  const categories = [
    "Wszystkie",
    ...new Set(photos.map((photo) => photo.category)),
  ];
  const filteredPhotos =
    selectedCategory === "Wszystkie"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-8 py-8 md:py-12 mt-32">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-12 text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}>
          Nasza Galeria Wypieków
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Odkryj nasze słodkie arcydzieła - tradycyjne smaki w nowoczesnym
          wydaniu
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((category, i) => (
            <motion.button
              key={category}
              variants={categoryVariants}
              custom={i}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}>
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.alt}
              variants={itemVariants}
              layout
              transition={{ type: "spring", stiffness: 150 }}>
              <div className="group relative transition-transform duration-200 ease-out">
                <div className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Link
                    href={`/galery/${encodeURIComponent(photo.alt)}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl">
                    <div className="aspect-square relative">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index < 3 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL={photo.blurDataURL}
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12 text-gray-500">
            <p className="text-xl">Brak produktów w wybranej kategorii</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
