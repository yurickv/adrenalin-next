import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Вступ. Перед початком тренувань в тренажерному залі',
  description:
    'Чому важливо тренуватись та вести активний спосіб життя, що буде при сидячому способі життя. Тренування як стиль життя успішної людини',
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
