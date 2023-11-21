import type { Metadata } from 'next';
// import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Безкоштовний посібник для початківців в тренажерному залі',
  description:
    'Посібник для початківців від тренажерного залу Adrenalin, інструкція з чого почати тренування: 1.Тренування в тренажерному залі, вправи, програми тренувань, техніка 2.Харчування при наборі ваги чи схудненні  3.Мотивація для тренувань 4.Відновлення після тренувань',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GTM_ID}')`}
      </Script> */}
      {children}
    </>
  );
}
