'use client';

import React, { useEffect, useState } from 'react';

import { DescriptionText } from './DescriptionText';
import { PriceTraining } from './PriceTraining';
import { DetailsAndPriceButtons } from './DetailsAndPriceButtons';
import { monthPass, passDuration } from '@/const/priceConst';
import { changePriceForTrainings } from '@/app/_helpers/changePriceForTrainings';

type TrainingCardProps = {
  onClickMore: (button: 'standart' | 'personal' | 'planTrain') => void;
  isOpen: boolean;
};

export const TrainingCard: React.FC<TrainingCardProps> = ({
  onClickMore,
  isOpen,
}) => {
  const [chosenProduct, setChosenProduct] = useState(monthPass[2]);
  const [productDuration, setProductDuration] = useState(passDuration[0]);
  const [price, setPrice] = useState(
    changePriceForTrainings(chosenProduct.price, productDuration.quantity)
  );

  const isNotUnlimitedPass =
    chosenProduct.price === '80' ||
    chosenProduct.price === '440' ||
    chosenProduct.price === '500';
  useEffect(() => {
    if (isNotUnlimitedPass) {
      setProductDuration(passDuration[0]);
      return setPrice(changePriceForTrainings(chosenProduct.price, '1'));
    }

    setPrice(
      changePriceForTrainings(chosenProduct.price, productDuration.quantity)
    );
  }, [chosenProduct, productDuration]);

  return (
    <div
      className={` ${
        isOpen ? '!shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px]' : ''
      } px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
      hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] rounded-lg flex flex-col gap-6 hover:shrink basis-1/3`}
    >
      <DescriptionText
        title="Тренування"
        descr="Тренування на професійному обладнанні в просторому тренажерному залі Адреналін"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="quantity" className="">
            *Кількість занять:
          </label>
          <select
            name="quantity"
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2"
            value={chosenProduct.quantity}
            onChange={e => {
              const pass = monthPass.find(
                ({ quantity }) => quantity === e.target.value
              );
              if (pass) setChosenProduct(pass);
            }}
          >
            {monthPass.map(({ quantity, serviceName }) => (
              <option value={quantity}>{quantity + ' ' + serviceName}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="duration">*Тривалість:</label>
          <select
            name="duration"
            disabled={isNotUnlimitedPass}
            className="max-[440px]:max-w-[280px] min-[768px]:max-w-[340px] min-[880px]:max-w-[380px] min-[980px]:max-w-[404px]
        font-bold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-main mt-2"
            value={productDuration.quantity + ' ' + productDuration.serviceName}
            onChange={e => {
              const duration = passDuration.find(
                ({ quantity, serviceName }) =>
                  quantity + ' ' + serviceName === e.target.value
              );
              if (duration) {
                setProductDuration(duration);
              }
            }}
          >
            {passDuration.map(({ quantity, serviceName }) => (
              <option value={quantity + ' ' + serviceName}>
                {quantity + ' ' + serviceName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <PriceTraining
        duration={productDuration.quantity + ' ' + productDuration.serviceName}
        price={price}
      />
      <DetailsAndPriceButtons
        onClickMore={onClickMore}
        name="standart"
        isOpen={isOpen}
        chosenProduct={{
          ...chosenProduct,
          price: price.toString(),
          duration: productDuration.quantity,
        }}
      />
    </div>
  );
};
