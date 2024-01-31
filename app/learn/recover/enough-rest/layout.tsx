import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Відновлення після спортзалу.',
  description:
    'Як відновитись для наступного тренування у тренажерному залі? Ключові моменти у відновленні після спортзалу. Активний відпочинок, сон, харчування для відновлення.',
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
