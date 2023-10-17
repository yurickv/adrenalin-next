import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Вступ. Перед початком тренувань в тренажерному залі',
  description:
    'Чому важливо тренуватись та вести активний спосіб життя, що буде при сидячому способі життя. ',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
