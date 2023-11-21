import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вступ. Перед початком тренувань в тренажерному залі',
  description:
    'Чому важливо тренуватись та вести активний спосіб життя, що буде при сидячому способі життя. Тренування як стиль життя успішної людини',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
