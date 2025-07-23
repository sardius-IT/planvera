import './globals.css';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <TopInfoBar />
        <Navbar />
        <main className="min-h-screen px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
