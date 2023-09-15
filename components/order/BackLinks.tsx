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
      `http://${
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
        <>
          <Link href="/" onClick={clearCookie}>
            На головну
          </Link>
        </>
      ) : (
        <>
          <Link href="/services/cart">Перейти в корзину</Link>
        </>
      )}
    </>
  );
};
