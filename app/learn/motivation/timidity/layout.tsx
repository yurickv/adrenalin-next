import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подолання тривожності в тренажерному залі',
  description:
    'Розвиток впевненості: Стратегії подолання тривожності та соромязливості, повязаних із заняттями спортом в спортзалі.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
