import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Раціон при схудненні',
  description:
    'Методи скидання ваги (схуднення) без дієт, індивідуальна денна потреба калорій, міфи у схудненні. Апетит і голод - в чому різниця? ',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
