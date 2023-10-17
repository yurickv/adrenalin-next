import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Тренування новачка в спортзалі',
  description:
    'З чого почати новачку в тренажерному залі? Розглянемо розминку, базові вправи, прогресія навантаження',
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
