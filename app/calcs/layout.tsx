import dynamic from 'next/dynamic';

const SurveyPopup = dynamic(
  () => import('@/components/calcs-page/SurveyPopup'),
  {
    ssr: false,
  }
);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SurveyPopup />
      {children}
    </>
  );
}
