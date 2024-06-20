import { Inter } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Theme Provider
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Interior Design',
  description:
    'Built using Next.js and Tailwind CSS with Shadcn UI components.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
