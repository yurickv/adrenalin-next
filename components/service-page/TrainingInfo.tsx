import { mounth, unlimit, year } from '@/const/priceConst';
import { InfoTemplate } from './InfoTemplate';

export const TrainingInfo = () => {
  const styles = {
    css: 'md:max-h-[301px]',
    cssUl: 'grid-rows-3',
    cssText: 'min-[768px]:flex-col min-[768px]:text-center',
  };
  return (
    <div
      className=" md:grid md:grid-cols-3 md:col-span-3  gap-6 md:gap-4 lg:gap-6 
        justify-between border-t-2 border-main pt-5 md:pt-8 lg:pt-11
        mx-4 md:mx-0  md:order-last items-start "
    >
      <InfoTemplate
        title="Щомісячні тренування"
        data={mounth}
        styles={styles}
      />
      <InfoTemplate title="Безлім на місяць" data={unlimit} styles={styles} />
      <InfoTemplate
        title="Довгострокові тренування"
        data={year}
        styles={styles}
      />
    </div>
  );
};
