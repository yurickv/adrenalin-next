import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Розминка перед тренуванням в тренажерному залі',
  description:
    'Призначення розминки. Як і скільки розминатись в тренажерному залі? Види розминки при різних вправах.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
