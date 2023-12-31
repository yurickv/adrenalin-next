'use client';
import Link from 'next/link';
import { CartLocalStorageService } from '@/app/_services/cartLocalStorageService';
import { SHOPPING_CART } from '@/const/localstorageKeys';

export const BackLinks = ({
  isPaymentSuccessful,
  orderId,
}: {
  isPaymentSuccessful: boolean;
  orderId: string;
}) => {
  if (isPaymentSuccessful) {
    const localStorageCartService = new CartLocalStorageService(SHOPPING_CART);
    localStorageCartService.clearCart();
  }
  const clearCookie = async () => {
    await fetch(
      `${
        process.env.HOST || process.env.NEXT_PUBLIC_HOST
      }/api/cookies/${orderId}`,
      {
        method: 'DELETE',
      }
    );
  };

  return (
    <>
      {isPaymentSuccessful ? (
        <div className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:from-red-600 focus:to-orange-600 rounded-full p-2 md:p-4 text-sm md:text-base text-mainTitleBlack text-center block active:bg-primary-700 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] shadow-[0 4px 9px -4px #3b71ca] transition-all duration-200 w-max mx-auto mt-4 md:mt-8 lg:mt-12">
          <Link href="/" onClick={clearCookie}>
            На головну
          </Link>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:from-red-600 focus:to-orange-600 rounded-full p-2 md:p-4 text-sm md:text-base text-mainTitleBlack text-center block active:bg-primary-700 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] shadow-[0 4px 9px -4px #3b71ca] transition-all duration-200 w-max mx-auto mt-4 md:mt-8 lg:mt-12">
          <Link href="/services/cart">Перейти в корзину</Link>
        </div>
      )}
    </>
  );
};
