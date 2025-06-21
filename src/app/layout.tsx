import './globals.css';
import { ReactNode } from 'react';
import CustomCursor from './cursor';
import Navbar from './navbar';

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
            </body>
        </html>
    );
}