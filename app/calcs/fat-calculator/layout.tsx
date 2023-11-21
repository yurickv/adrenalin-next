import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор процент жиру в тілі',
  description:
    'Фітнес калькулятор для визначення проценту жиру в тілі, просте визначення своєї фізичної форми',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
