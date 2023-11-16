'use client';

import React, { useEffect, useState } from 'react';
import { DescriptionText } from './DescriptionText';
import { PriceTrener } from './PriceTrener';
import { DetailsAndPriceButtons } from './DetailsAndPriceButtons';
import { coachPasses } from '@/const/priceConst';

type TrenerCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
  isOpen: boolean;
};

export const TrenerCard: React.FC<TrenerCardProps> = ({
  onClickMore,
  isOpen,
}) => {
  const [pass, setPass] = useState(coachPasses[0]);
  const [chosenService, setChosenService] = useState({
    serviceName: coachPasses[0].serviceName,
    plan: coachPasses[0].plans[2],
  });
  const [duration, setDuration] = useState(coachPasses[0].plans[2]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setChosenService({ serviceName: pass.serviceName, plan: { ...duration } });
  }, [pass, duration]);

  function onToggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div
      id="coach-training"
      className={` ${
        isOpen
          ? '!shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] dark:!shadow-[0px_4px_15px_0px_rgba(116,116,116,0.90)]'
          : ''
      } px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
      dark:bg-[#676465] dark:shadow-[0px_4px_15px_0px_rgba(116,116,116,0.30)]
      hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] dark:hover:shadow-[0px_4px_15px_0px_rgba(116,116,116,0.90)]
     rounded-xl flex flex-col gap-6 basis-1/3 overflow-hidden`}
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
          className="min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-mainText dark:border-mainTextBlack bg-white dark:bg-[#676465]
        rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2 text-mainText dark:text-mainTextBlack"
          value={duration.id}
          onChange={e => {
            const findService = pass.plans.find(
              ({ id }) => id === e.target.value
            );
            if (findService) {
              setDuration(findService);
            }
          }}
        >
          {pass.plans.map(({ id, availability }) => (
            <option value={id} key={id}>
              {availability}{' '}
            </option>
          ))}
        </select>
      </div>
      <ul className="ul-list !indent-0 mt-3 md:mt-3.5 ">
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
        onToggleModal={onToggleModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};
