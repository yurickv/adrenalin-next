'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@/components/icons/forPopMenu/HomeIcon';
import { ProgramCard } from '@/components/service-page/ProgramCard';
import { TrainingCard } from '@/components/service-page/TrainingCard';
import { TrenerCard } from '@/components/service-page/TrenerCard';
import { TrainingInfo } from '@/components/service-page/TrainingInfo';
import { TrenerInfo } from '@/components/service-page/TrenerInfo';
import { ProgramInfo } from '@/components/service-page/ProgramInfo';
import FadeIn, { FadeInStagger } from '@/components/FadeIn';
import Image from 'next/image';
import profilePic from '../../public/bg-hero.webp';

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
      <section className="relative bg-hero-bg">
        <div className="div-container py-[20px] md:py-[44px] mx-auto text-center flex flex-col gap-5 md:gap-10 z-10 relative">
          <h3 className="text-left text-white flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon />
              <span className="sr-only md:not-sr-only">Adrenalin_gym</span>
            </Link>
            <span className="font-semibold"> &gt; Послуги</span>
          </h3>
          <h1 className="title mb-14 text-white">Послуги</h1>
        </div>
        <Image
          alt="Adrenalin gym foto"
          src={profilePic}
          placeholder="blur"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </section>
      <section className="py-[40px] md:py-[44px] lg:py-[88px] bg-white dark:bg-darkBody">
        <FadeInStagger
          className="div-container flex flex-col md:grid  md:grid-cols-3 
          gap-12 md:gap-x-4 lg:gap-x-6 md:gap-y-8 lg:gap-y-11"
        >
          <FadeIn>
            <TrainingCard onClickMore={onClickMore} isOpen={standart} />
          </FadeIn>
          {standart ? <TrainingInfo /> : ''}
          <FadeIn>
            <TrenerCard onClickMore={onClickMore} isOpen={personal} />
          </FadeIn>
          {personal ? <TrenerInfo /> : ''}
          <FadeIn>
            <ProgramCard onClickMore={onClickMore} isOpen={planTrain} />
          </FadeIn>
          {planTrain ? <ProgramInfo /> : ''}
        </FadeInStagger>
      </section>
    </main>
  );
};

export default Services;
