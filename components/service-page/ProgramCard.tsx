'use client';

import React, { useState } from 'react';

import { DescriptionText } from './DescriptionText';
import { ButtonForPrice } from './ButtonForPrice';
import { PriceTrainingPlan } from './PriceTrainingPlan';

type ProgramCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
};

export const ProgramCard: React.FC<ProgramCardProps> = ({ onClickMore }) => {
  const [quantity, setQuantity] = useState<number>(12);
  const [duration, setDuration] = useState<number>(1);

  function handleChange(number: number) {
    if (number === 1) {
      setQuantity(number);
      setDuration(1);
      return;
    }
    setQuantity(number);
  }
  return (
    <div
      className="px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
     hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] rounded-lg flex flex-col gap-6 basis-1/3"
    >
      <DescriptionText
        title="План харчування/тренування"
        descr="План харчування та/або тренування, із врахуванням Вашого віку, ваги і мети занять"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="quantity" className="">
            *Програма:
          </label>
          <select
            name="quantity"
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2"
            value={quantity}
            onChange={e => handleChange(Number(e.target.value))}
          >
            <option value="1">План тренування</option>
            <option value="2" selected>
              План харчування
            </option>
          </select>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="duration" className="">
            *Тривалість:
          </label>
          <select
            name="duration"
            disabled={quantity === 1 ? true : false}
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
          >
            <option value="1" className="" selected>
              1 тиждень
            </option>
            <option value="4">1 місяць</option>
          </select>
        </div>
      </div>
      <PriceTrainingPlan duration={duration} quantity={quantity} />
      <ButtonForPrice onClickMore={onClickMore} name="planTrain" />
    </div>
  );
};
