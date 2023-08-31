import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Послуги',
  description: 'Послуги тренажерного залу Adrenalin',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
