import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сила дисципліни для занять в тренажерному залі',
  description:
    'Регулярні тренування в тренажерному залі, дисципліна як фактор успіху в тренуваннях і житті.',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      'max-snippet': -1,
    },
  },
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
