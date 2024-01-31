import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Основи здорового харчування',
  description:
    'Для чого ми їмо? Здорове харчування - це просто. Як їсти і не переїдати. Жири, корисні вуглеводи і білки в продуктах.',
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
