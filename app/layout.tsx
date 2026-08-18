import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
const serif = Cormorant_Garamond({ subsets:['latin'], variable:'--font-cormorant', weight:['400','500','600','700'], style:['normal','italic'] });
const sans = Inter({ subsets:['latin'], variable:'--font-inter', weight:['300','400','500','600'] });
export const metadata: Metadata = { title:'Happy Birthday, Jihan 🌸', description:'A little birthday world made with love for Jihan.', icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>; }
