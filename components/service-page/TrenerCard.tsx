'use client';

import React, { useState } from 'react';
import { DescriptionText } from './DescriptionText';
import { PriceTrener } from './PriceTrener';
import { ButtonForPrice } from './ButtonForPrice';

type TrenerCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
  isOpen: boolean;
};

export const TrenerCard: React.FC<TrenerCardProps> = ({
  onClickMore,
  isOpen,
}) => {
  const [quantity, setQuantity] = useState<number>(8);
  return (
    <div
      className={` ${
        isOpen ? '!shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px]' : ''
      } px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
     hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] rounded-lg flex flex-col gap-6 basis-1/3`}
    >
      <DescriptionText
        title="Тренування з тренером"
        descr="Передаємо Вам кращий досвід і практики для максимально швидкого результату"
      />
      <div className="flex flex-col">
        <label htmlFor="quantity" className="">
          *Кількість занять:
        </label>
        <select
          name="quantity"
          className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        >
          <option value="1" className="">
            1 тренування
          </option>
          <option value="4">4 тренування</option>
          <option value="8">8 тренувань</option>
          <option value="12">12 тренувань</option>
        </select>
      </div>
      <ul className="ul-list !indent-0 mt-3 md:mt-5 ">
        <li className="p-item !text-base lg:text-lg">
          <span className="md:sr-only min-[1020px]:not-sr-only">В ціну</span>{' '}
          включено абонемент
        </li>
        <li className="p-item !text-base lg:text-lg">
          <span className="md:sr-only min-[1020px]:not-sr-only"> Включена</span>{' '}
          програма тренувань
        </li>
      </ul>
      <PriceTrener quantity={quantity} />
      <ButtonForPrice
        onClickMore={onClickMore}
        name="personal"
        isOpen={isOpen}
      />
    </div>
  );
};
