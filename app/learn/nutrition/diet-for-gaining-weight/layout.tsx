import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Раціон при наборі ваги',
  description:
    'Харчування при набиранні мязової маси, як накачатись без стероїдів швидко, індивідуальна денна потреба калорій, потреба організму в білках і вуглеводах. Коротко про спортивне харчування.',
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
