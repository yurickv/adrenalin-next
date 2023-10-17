import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Сила дисципліни для занять в тренажерному залі',
  description:
    'Регулярні тренування в тренажерному залі, дисципліна як фактор успіху в тренуваннях і житті.',
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
