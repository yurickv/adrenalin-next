import {
  foodPlanFullProgram,
  trainingPlanFullProgram,
} from '@/const/priceConst';
import { InfoTemplate } from './InfoTemplate';

export const ProgramInfo = () => {
  const styles = {
    css: 'md:w-[calc(33%-5px)] lg:w-[calc(33%-11px)]',
    cssUl: 'grid-rows-2',
  };

  return (
    <div
      className=" md:flex  md:col-span-3  gap-6 md:gap-4 lg:gap-6 
        justify-end border-t-2 border-main pt-5 md:pt-8 lg:pt-11
        mx-4 md:mx-0  md:order-last items-start "
    >
      <InfoTemplate
        title="План тренування"
        data={trainingPlanFullProgram}
        styles={styles}
      />
      <InfoTemplate
        title="План харчування"
        data={foodPlanFullProgram}
        styles={styles}
      />
    </div>
  );
};
