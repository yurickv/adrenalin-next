import { coachServices } from '@/const/priceConst';
import { InfoTemplate } from './InfoTemplate';

export const TrenerInfo = () => {
  const styles = { css: 'md:w-1/3' };
  return (
    <div
      className=" md:grid  md:col-span-3  gap-6 md:gap-4 lg:gap-6 
        justify-items-center border-t-2 border-main pt-5 md:pt-8 lg:pt-11
        mx-4 md:mx-0  md:order-last items-start "
    >
      <InfoTemplate
        title="Тренерський супровід"
        data={coachServices}
        styles={styles}
      />
    </div>
  );
};
