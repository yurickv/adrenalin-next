import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сила дисципліни для занять в тренажерному залі',
  description:
    'Регулярні тренування в тренажерному залі, дисципліна як фактор успіху в тренуваннях і житті.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
