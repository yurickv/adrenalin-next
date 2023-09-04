'use client';

import React, { useState } from 'react';
import { DescriptionText } from './DescriptionText';
import { PriceTrener } from './PriceTrener';
import { DetailsAndPriceButtons } from './DetailsAndPriceButtons';
import { coachServices } from '@/const/priceConst';

type TrenerCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
  isOpen: boolean;
};

export const TrenerCard: React.FC<TrenerCardProps> = ({
  onClickMore,
  isOpen,
}) => {
  const [chosenService, setChosenService] = useState(coachServices[2]);

  return (
    <div
      className={` ${
        isOpen
          ? '!shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] dark:!shadow-[0px_4px_15px_0px_rgba(116,116,116,0.90)]'
          : ''
      } px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
      dark:bg-[#676465] dark:shadow-[0px_4px_15px_0px_rgba(116,116,116,0.30)]
      hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] dark:hover:shadow-[0px_4px_15px_0px_rgba(116,116,116,0.90)]
     rounded-lg flex flex-col gap-6 basis-1/3 overflow-hidden`}
    >
      <DescriptionText title="Тренування з тренером" />
      <PriceTrener service={chosenService} />
      <div className="flex flex-col">
        <label
          htmlFor="quantity"
          className="text-mainTitle dark:text-mainTitleBlack"
        >
          *Кількість занять:
        </label>
        <select
          name="quantity"
          className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-mainText dark:border-mainTextBlack bg-white dark:bg-[#676465]
        rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2 text-mainText dark:text-mainTextBlack"
          value={chosenService.quantity}
          onChange={e => {
            const findService = coachServices.find(
              service => service.quantity === e.target.value
            );
            if (findService) {
              setChosenService(findService);
            }
          }}
        >
          {coachServices.map(({ quantity, serviceName }) => (
            <option value={quantity}>{quantity + ' ' + serviceName} </option>
          ))}
        </select>
      </div>
      <ul className="ul-list !indent-0 mt-3 md:mt-5 ">
        <li className="p-item !text-base lg:text-lg text-mainText dark:text-mainTextBlack">
          <span className="md:sr-only min-[1020px]:not-sr-only">В ціну</span>{' '}
          включено абонемент
        </li>
        <li className="p-item !text-base lg:text-lg text-mainText dark:text-mainTextBlack">
          <span className="md:sr-only min-[1020px]:not-sr-only"> Включена</span>{' '}
          програма тренувань
        </li>
      </ul>

      <DetailsAndPriceButtons
        onClickMore={onClickMore}
        name="personal"
        isOpen={isOpen}
        chosenProduct={chosenService}
      />
    </div>
  );
};
