import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './ui/Navigation'
import Footer from './ui/Footer'
import dynamic from 'next/dynamic'


const DynamicHeader = dynamic(() => import("./ui/Navigation"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicHeader />
        {children}
        <Footer />
        </body>
    </html>
  )
}
