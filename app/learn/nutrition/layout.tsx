import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Здорове харчування',
  description:
    'Здорове харчування при наборі мязової маси чи схудненні. Схуднення без дієт. Набір мязової маси швидко.',
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
