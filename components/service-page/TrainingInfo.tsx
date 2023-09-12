import { monthPass, yearPass } from '@/const/priceConst';
import { InfoTemplate } from './InfoTemplate';

export const TrainingInfo = () => {
  const styles = {
    css: 'md:max-h-[366px]',
    cssUl: 'grid-rows-4',
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
        data={monthPass}
        styles={styles}
      />
      <InfoTemplate
        title="Довгострокові тренування"
        data={yearPass}
        styles={styles}
      />
    </div>
  );
};
