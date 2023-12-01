import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />

        <script
          defer
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GTM_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}

// const loadGoogleAnalytics = async () => {
//   try {
//     const { default: GoogleAnalytics } = await import(
//       '@/components/GoogleAnalytics'
//     );
//     return await GoogleAnalytics({ ga_id: process.env.GTM_ID });
//   } catch (error) {
//     console.error('Error loading Google Analytics:', error);
//   }
// };
