'use client';

import { galeryCardInfo } from '@/const';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import FadeIn, { FadeInStagger } from '@/components/FadeIn';
import { ZoomIn } from 'lucide-react';

import Image from 'next/image';
// import {
//   isImageFitCover,
//   isImageSlide,
//   useLightboxProps,
// } from 'yet-another-react-lightbox';

const GalerySectionCard = () => {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = galeryCardInfo.map(item => ({
    src: item.imageUrl,
    width: item.width,
    height: item.height,
  }));

  return (
    <div className="w-full mt-14 text-center h-[368px] overflow-hidden">
      <FadeInStagger className="flex flex-col items-center  md:grid md:grid-cols-2 lg:grid-cols-3 h-full flex-wrap mx-2 md:mx-0 gap-6">
        {galeryCardInfo.map((x, index) => {
          if (index < 3) {
            // Плитка 2 видима з md, плитка 3 — з lg (інакше їх обрізає h-[368px])
            const tileVisibility = ['', 'hidden md:block', 'hidden lg:block'][
              index
            ];
            // Лічильник — лише на останній видимій плитці брейкпоінта
            const counterVisibility = [
              'flex md:hidden',
              'hidden md:flex lg:hidden',
              'hidden lg:flex',
            ][index];
            const restCount = galeryCardInfo.length - (index + 1);
            return (
              <FadeIn
                key={index}
                className={`group w-full h-[344px] relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg cursor-zoom-in ${tileVisibility}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={x.imageUrl}
                    alt="Фото тренажерного залу Адреналін"
                    sizes="(max-width: 768px) 100vw, (min-width: 1280px) 50vw, 33vw"
                    fill
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors duration-300 ease-in-out"
                  onClick={() => {
                    setSlideIndex(index);
                    setOpen(true);
                  }}
                >
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={40}
                    aria-hidden
                  />
                  <span
                    className={`absolute inset-0 items-center justify-center bg-black/50 group-hover:bg-black/60 transition-colors duration-300 ease-in-out ${counterVisibility}`}
                  >
                    <span className="text-white text-2xl font-semibold drop-shadow">
                      +{restCount} фото
                    </span>
                  </span>
                </div>
              </FadeIn>
            );
          }
        })}
      </FadeInStagger>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={slideIndex}
        slides={slides}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      />
    </div>
  );
};

export default GalerySectionCard;
