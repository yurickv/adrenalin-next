import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пошук мотивації для занять в тренажерному залі',
  description:
    'Мотивація для тренувань в тренажерному залі, покрокова стратегія для підтримки свого настою для перемог і досягнень.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
