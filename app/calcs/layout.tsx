import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Прості фітнес калькулятори',
  description:
    'Прості фітнес калькулятори для визначення: індексу маси тіла, проценту жиру в організмі, денної потреби в калоріях',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
