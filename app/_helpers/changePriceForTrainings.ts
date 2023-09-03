import { passVariations } from '@/const/priceConst';

export const changePriceForTrainings = (product: string, duration: string) => {
  const priceWithoutDiscount = Number(product) * Number(duration);
  const priceWithDiscount = passVariations[priceWithoutDiscount];
  if (!priceWithDiscount) {
    return priceWithoutDiscount;
  }
  return priceWithDiscount;
};
// if (value === 8) {
//     message = '440';
//     mounth = '1 місяць';
// } else if (value === 12) {
//     message = '500';
//     mounth = '1 місяць';
// } else if (value === 20) {
//     message = '540';
//     mounth = '1 місяць';
// } else if (value === 60 || value === 36) {
//     message = '1500';
//     mounth = '3 місяці';
// } else if (value === 120 || value === 72) {
//     message = '2760';
//     mounth = '6 місяців';
// } else if (value === 240 || value === 144) {
//     message = '5040';
//     mounth = '1 рік';
// } else if (value === 1) {
//     message = '80';
//     mounth = '1 тренування';
// } else {
//     message = '';
//     mounth = '';
// }
