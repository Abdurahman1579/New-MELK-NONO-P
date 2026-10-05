import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Majiilisa Melka Nono - Piroojektii Gamoo G+3',
  description: 'Piroojektii Ijaarsa Gamoo G+3 fi Muka Qabeenya Zalaqii - Majiilisa Melka Nono',
};

export default function RootLayout({ children }) {
  return (
    <html lang="om">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
            {children}
          </main>
          <footer className="bg-emerald-950 text-emerald-200 text-center py-6 text-sm">
            © {new Date().getFullYear()} Majiilisa Kuta Magaala Melka Nono. Zoonaa fi Wajjiraalee Aanaa 3.
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}