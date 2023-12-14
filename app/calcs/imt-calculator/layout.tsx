import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор індекс маси тіла',
  description:
    'Фітнес калькулятор для визначення індексу маси тіла, просте тест для визначення своєї фізичної форми',
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
