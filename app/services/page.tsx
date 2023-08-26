'use client';

import React, { useState } from 'react';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import { ProgramCard } from '@/components/service-page/ProgramCard';
import { TrainingCard } from '@/components/service-page/TrainingCard';
import { TrenerCard } from '@/components/service-page/TrenerCard';
import Link from 'next/link';
import { TrainingInfo } from '@/components/service-page/TrainingInfo';

type OnClickMoreFunction = (
  button: 'standart' | 'personal' | 'planTrain'
) => void;

const Services = () => {
  const [standart, setStandart] = useState<boolean>(false);
  const [personal, setPersonal] = useState<boolean>(false);
  const [planTrain, setPlanTrain] = useState<boolean>(false);

  const onClickMore: OnClickMoreFunction = (button: string) => {
    if (button === 'standart') {
      setStandart(!standart);
      setPersonal(false);
      setPlanTrain(false);
    } else if (button === 'personal') {
      setPersonal(!personal);
      setStandart(false);
      setPlanTrain(false);
    } else if (button === 'planTrain') {
      setPlanTrain(!planTrain);
      setStandart(false);
      setPersonal(false);
    }
  };

  return (
    <main>
      <section className="bg-hero-bg bg-center bg-cover ">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5">
          <h3 className="text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Послуги</span>
          </h3>
          <h1 className="title mb-14 text-white">Послуги</h1>
        </div>
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px]">
        <div className="div-container flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6">
          <TrainingCard onClickMore={onClickMore} />
          <TrenerCard onClickMore={onClickMore} />
          <ProgramCard onClickMore={onClickMore} />
        </div>
      </section>
      <section className="">{standart ? <TrainingInfo /> : ''}</section>
      <section className="">{personal ? <TrainingInfo /> : ''}</section>
      <section className="">{planTrain ? <TrainingInfo /> : ''}</section>
    </main>
  );
};

export default Services;
