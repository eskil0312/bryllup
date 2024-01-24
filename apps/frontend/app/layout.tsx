import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navigation from '@/components/Navigation';
import { Analytics } from '@vercel/analytics/react';

const inter = Playfair_Display({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bryllup Sara og Eskil',
    description: 'Informasjon om bryllupet til Sara og Eskil 06.07.24',
    icons: {
        icon: '/icon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="no" className="h-full bg-[#fff]">
            <body className={inter.className}>
                <header>
                    <Navigation />
                </header>
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}
