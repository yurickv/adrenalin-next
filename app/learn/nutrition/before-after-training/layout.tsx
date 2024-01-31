import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Харчування до і після тренування',
  description:
    'Що їсти до і після тренування в спортзалі для максимальної продуктивності під час тренувань в спортзалі та сприянні оптимальному відновленню.',
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
