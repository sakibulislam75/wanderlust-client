import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const josefinSans = Josefin_Sans({
   subsets: ['latin'],
});

export const metadata = {
   title: 'Wanderlust',
   description:
      'Bangladesh best travel website for travel lovers. Explore the best destinations, book your trips, and create unforgettable memories with Wanderlust.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
         <head>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
         </head>
         <body className="min-h-full flex flex-col">
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
