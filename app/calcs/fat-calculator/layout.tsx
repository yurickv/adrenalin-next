import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор процент жиру в тілі',
  description:
    'Фітнес калькулятор для визначення проценту жиру в тілі, просте визначення своєї фізичної форми',
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
