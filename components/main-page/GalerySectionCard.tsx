'use client';

import { galeryCardInfo } from '@/const';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

const GalerySectionCard = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const slides = galeryCardInfo.map(item => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full mt-14 text-center h-[311px] overflow-hidden">
      <div className="flex flex-col items-center  md:grid md:grid-cols-2 lg:grid-cols-3 h-full flex-wrap mx-2 md:mx-0 gap-6  ">
        {galeryCardInfo.map((x, index) => {
          return (
            <div
              key={index}
              className="group w-full h-[287px] relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg cursor-zoom-in"
            >
              <div
                className="bg-cover bg-center h-full w-full bg-no-repeat "
                style={{ backgroundImage: `url("${x.imageUrl}")` }}
              ></div>
              <div
                className="bg-black opacity-0 group-hover:opacity-25  absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                onClick={() => {
                  setOpen(true);
                  setImage(x.imageUrl);
                }}
              ></div>
            </div>
          );
        })}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        slides={slides}
      />
    </div>
  );
};

export default GalerySectionCard;
