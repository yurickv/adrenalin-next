import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Відпочинок після тренування в спортклубі',
  description:
    'Чому важливо правильно віновлюватись після тренувань. Чим загрожує перетренованість?',
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
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GTM_ID}')`}
      </Script>
      {children}
    </section>
  );
}
