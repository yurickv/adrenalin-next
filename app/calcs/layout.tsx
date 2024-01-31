import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Прості фітнес калькулятори',
  description:
    'Прості фітнес калькулятори для визначення: індексу маси тіла, проценту жиру в організмі, денної потреби в калоріях',
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
