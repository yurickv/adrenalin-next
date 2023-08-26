import { InfoTemplate } from './InfoTemplate';

export const TrainingInfo = () => {
  const mounth = [
    { descript: 'Разове тренування', price: '80' },
    { descript: '8 тренувань', price: '440' },
    { descript: '8 тренувань', price: '500' },
  ];
  const unlimit = [{ descript: 'Необмежена кількість / місяць', price: '550' }];
  const year = [
    { descript: '3 місяці', price: '1500 [500/міс]' },
    { descript: '6 місяців', price: '2760 [460/міс]' },
    { descript: '12 місяців', price: '5040 [420/міс]' },
  ];

  return (
    <div
      className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 
        justify-between border-t-2 border-main py-[40px] md:py-[44px] lg:py-[88px]
        mx-4 md:mx-[40px] lg:mx-[66px] xl:mx-[132px] "
    >
      <InfoTemplate title="Щомісячні тренування" data={mounth} />
      <InfoTemplate title="Безлім на місяць" data={unlimit} />
      <InfoTemplate title="Довгострокові тренування" data={year} />
    </div>
  );
};
