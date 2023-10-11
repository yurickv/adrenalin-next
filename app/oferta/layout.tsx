import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Офіційна оферта спортклубу Адреналін',
  description:
    'Пропозиція (публічна оферта) укласти договір на спортивно – оздоровчі послуги на території фітнес клубу «Adrenalin» (далі за текстом – Клуб), який знаходиться за адресою: м. Тернопіль, вул. Академіка Сахарова 10',
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
