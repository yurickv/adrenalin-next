import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Базові вправи для максимального швидкого росту і прогресу.',
  description:
    'Вибір програми тренувань. Перелік базових вправ, техніка виконання вправ. Тренування в домашніх умовах.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
