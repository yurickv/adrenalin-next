import './globals.css';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/Footer';

// const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

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
      </body>
    </html>
  );
}
