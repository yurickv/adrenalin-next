import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Відпочинок після тренування в спортклубі',
  description:
    'Чому важливо правильно віновлюватись після тренувань. Чим загрожує перетренованість?',
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
  return <section>{children}</section>;
}
