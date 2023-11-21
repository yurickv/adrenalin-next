import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Розминка перед тренуванням в тренажерному залі',
  description:
    'Призначення розминки. Як і скільки розминатись в тренажерному залі? Види розминки при різних вправах в спортзалі.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
