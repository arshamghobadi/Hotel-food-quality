import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';
import Header from '../components/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bestwestern hotel food quality',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <Header />
          <main className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
