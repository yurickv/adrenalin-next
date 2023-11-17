'use client';

import { galeryCardInfo } from '@/const';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import FadeIn, { FadeInStagger } from '@/components/FadeIn';

import Image from 'next/image';
// import {
//   isImageFitCover,
//   isImageSlide,
//   useLightboxProps,
// } from 'yet-another-react-lightbox';

const GalerySectionCard = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const slides = galeryCardInfo.map(item => ({
    src: item.imageUrl,
    width: 958,
    height: 1100,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 368 },
      { src: item.imageUrl, width: 640, height: 736 },
      { src: item.imageUrl, width: 1200, height: 1380 },
    ],
  }));

  return (
    <div className="w-full mt-14 text-center h-[368px] overflow-hidden">
      <FadeInStagger className="flex flex-col items-center  md:grid md:grid-cols-2 lg:grid-cols-3 h-full flex-wrap mx-2 md:mx-0 gap-6">
        {galeryCardInfo.map((x, index) => {
          if (index < 3) {
            return (
              <FadeIn
                key={index}
                className="group w-full h-[344px] relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg cursor-zoom-in"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={x.imageUrl}
                    alt="Фото тренажерного залу Адреналін"
                    sizes="(max-width: 768px) 100vw, (min-width: 1280px) 50vw,  33vw"
                    layout="fill"
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  className="bg-black opacity-0 group-hover:opacity-25  absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                  onClick={() => {
                    setOpen(true);
                    setImage(x.imageUrl);
                  }}
                ></div>
              </FadeIn>
            );
          }
        })}
      </FadeInStagger>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      />
    </div>
  );
};

export default GalerySectionCard;
