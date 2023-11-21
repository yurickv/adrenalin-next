import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор денна потреба калорій',
  description:
    'Фітнес калькулятор для визначення денної потреби в калоріях, просте планування для прихильників здорового харчування',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
