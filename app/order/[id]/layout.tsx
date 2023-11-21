import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Результат оплати за абонемент спортклубу Адреналін',
  description:
    'Сторінка результату оплати за послуги тренажерного залу Адреналін, оплата за: абонементи,персональні тренування з тренером, програми харчування чи тренувань.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
