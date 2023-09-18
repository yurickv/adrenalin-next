import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Корзина товарів',
  description:
    'У вашій корзині: 1.Тренування 2.Тренування з тренером 3.План харчування / тренування',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RCNV150GJ8"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RCNV150GJ8')`}
      </Script>
      {children}
    </section>
  );
}
