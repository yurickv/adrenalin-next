'use client';

import React, { useEffect, useState } from 'react';

import { DescriptionText } from './DescriptionText';
import { DetailsAndPriceButtons } from './DetailsAndPriceButtons';
import { PriceTrainingPlan } from './PriceProgram';
import { plans, plansPrices } from '@/const/priceConst';

type ProgramCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
  isOpen: boolean;
};

export const ProgramCard: React.FC<ProgramCardProps> = ({
  onClickMore,
  isOpen,
}) => {
  const [chosenProduct, setChosenProduct] = useState({
    ...plans[0],
    ...plansPrices[0],
  });
  const [servicePlans, setServicePlans] = useState(plans[0]);
  const [planDuration, setPlanDuration] = useState(plansPrices[0]);

  useEffect(() => {
    if (servicePlans.serviceName === 'План тренування') {
      setPlanDuration(plansPrices[0]);
    }

    setChosenProduct({ ...servicePlans, ...planDuration });
  }, [servicePlans, planDuration]);

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
      <DescriptionText title="План харчування/ тренування" />
      <PriceTrainingPlan
        duration={planDuration.availability}
        price={planDuration.price}
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="quantity"
            className="text-mainTitle dark:text-mainTitleBlack"
          >
            *Програма:
          </label>
          <select
            name="service name"
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-mainText dark:border-mainTextBlack bg-white dark:bg-[#676465]
        rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2 text-mainText dark:text-mainTextBlack"
            value={servicePlans.serviceName}
            onChange={e => {
              const plan = plans.find(
                ({ serviceName }) => serviceName === e.target.value
              );
              if (plan) {
                setServicePlans(plan);
              }
            }}
          >
            {plans.map(plan => (
              <option value={plan.serviceName}>{plan.serviceName}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="duration"
            className="text-mainTitle dark:text-mainTitleBlack"
          >
            *Тривалість:
          </label>
          <select
            name="duration"
            disabled={servicePlans.serviceName === 'План тренування'}
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-mainText dark:border-mainTextBlack bg-white dark:bg-[#676465]
        rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2 text-mainText dark:text-mainTextBlack"
            value={
              servicePlans.serviceName === 'План тренування'
                ? plansPrices[0].quantity
                : planDuration.quantity
            }
            onChange={e => {
              const plan = plansPrices.find(
                plan => plan.quantity === e.target.value
              );
              if (plan) {
                setPlanDuration(plan);
              }
            }}
          >
            {plansPrices.map(({ quantity, availability }) => (
              <option value={quantity}>{availability}</option>
            ))}
          </select>
        </div>
      </div>

      <DetailsAndPriceButtons
        chosenProduct={chosenProduct}
        onClickMore={onClickMore}
        name="planTrain"
        isOpen={isOpen}
      />
    </div>
  );
};
