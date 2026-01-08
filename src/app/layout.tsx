import './globals.css';
import { ReactNode } from 'react';
import CustomCursor from './components/cursor';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrolltotop';
import Background from './components/background';

export const metadata = {
    title: 'Guang\'s Portfolio',
    description: 'Welcome to Guang\'s portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html lang='en'>
        <body>
          <Background />
          <Navbar />
          {children}
          <CustomCursor />
          <div>
            <ScrollToTop />
          </div>
        </body>
      </html>
    );
}