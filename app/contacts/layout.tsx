import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакти спортклубу Абреналін',
  description:
    'Контактні дані за якими можна з звязатись з тренажерним залом Адреналін: адреса, номери телефонів, посилання на соціальні мережі, розміщення на карті Google',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
