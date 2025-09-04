import './globals.css';
import { ReactNode } from 'react';
import CustomCursor from './components/cursor';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrolltotop';

export const metadata = {
    title: 'Laalaa Portfolio',
    description: 'Welcome to Laalaa\'s portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <CustomCursor />
                <ScrollToTop />
            </body>
        </html>
    );
}