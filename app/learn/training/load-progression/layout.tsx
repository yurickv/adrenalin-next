import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Збільшення навантаження, прогресія в тренуванні',
  description:
    'Як ефективно збільшувати робочі ваги? Які є види збільшення навантаженн? Обєм тренування, види складності вправ, циклічність в тренуваннях, види тренувальних програм.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
