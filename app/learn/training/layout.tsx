import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тренування новачка в спортзалі',
  description:
    'З чого почати новачку в тренажерному залі? Розглянемо розминку, базові вправи, прогресія навантаження',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
