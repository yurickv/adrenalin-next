import { passVariations } from '@/const/priceConst';

export const changePriceForTrainings = (product: string, duration: string) => {
  const priceWithoutDiscount = Number(product) * Number(duration);
  const priceWithDiscount = passVariations[priceWithoutDiscount];
  if (!priceWithDiscount) {
    return priceWithoutDiscount;
  }
  return priceWithDiscount;
};
