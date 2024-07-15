import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";

const images = Array.from({ length: 19 }, (_, i) => `/images/${i + 1}.jpeg`);

export function BlurFadeDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0; // default to the first image if prevIndex is null
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return images.length - 1; // default to the last image if prevIndex is null
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <section id="photos" className="h-full w-full overflow-auto">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <div
              className="relative mb-4 w-full h-60 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <Image
                className="object-cover"
                src={imageUrl}
                alt={`Local image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </BlurFade>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-transparent"
                onClick={closeLightbox}
              >
                <FaTimes size={32} />
              </button>
              <button
                className="absolute left-4 text-white bg-transparent"
                onClick={prevImage}
              >
                <FaChevronLeft size={48} />
              </button>
              <button
                className="absolute right-4 text-white bg-transparent"
                onClick={nextImage}
              >
                <FaChevronRight size={48} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
