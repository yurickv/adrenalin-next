import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офіційна оферта спортклубу Адреналін',
  description:
    'Пропозиція (публічна оферта) укласти договір на спортивно – оздоровчі послуги на території фітнес клубу «Adrenalin» (далі за текстом – Клуб), який знаходиться за адресою: м. Тернопіль, вул. Академіка Сахарова 10',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
