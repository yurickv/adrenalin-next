import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Контакти спортклубу Абреналін',
  description:
    'Контактні дані за якими можна з звязатись з тренажерним залом Адреналін: адреса, номери телефонів, посилання на соціальні мережі, розміщення на карті Google',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'max-snippet': -1,
    },
  },
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <GoogleAnalytics ga_id={process.env.GTM_ID} />
    </>
  );
}
