import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фітнес калькулятор денна потреба калорій',
  description:
    'Фітнес калькулятор для визначення індивідуальної денної норми калорії залежно від віку, ваги і способу життя.',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
