'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { href: '/', label: { om: 'Fuula Jalqabaa', am: 'መነሻ', en: 'Home', ar: 'الرئيسية' } },
    { href: '/about', label: { om: 'Waa\'ee Piroojektii', am: 'ስለ ፕሮጀክቱ', en: 'About Us', ar: 'عن المشروع' } },
    { href: '/budget', label: { om: 'Qabiyyee & Bajata', am: 'ይዘት እና በጀት', en: 'Budget', ar: 'الميزانية' } },
    { href: '/fundraising', label: { om: 'Gulaala Deeggarsaa', am: 'የገንዘብ ማሰባሰብ', en: 'Fundraising', ar: 'جمع التبرعات' } },
    { href: '/governance', label: { om: 'Caasaa & Hoggansa', am: 'አመራር', en: 'Governance', ar: 'الحوكمة' } },
    { href: '/reports', label: { om: 'Gabaasa & Oduu', am: 'ሪፖርት እና ዜና', en: 'Reports', ar: 'التقارير' } },
    { href: '/contact', label: { om: 'Quunnamtii & Arjooma', am: 'ግንኙነት', en: 'Contact', ar: 'الاتصال' } },
  ];

  return (
    <header className="bg-emerald-900 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Link href="/" className="font-extrabold text-xl text-yellow-400">
          Majiilisa Melka Nono
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm font-semibold items-center mt-2 sm:mt-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-yellow-300 transition ${
                pathname === link.href ? 'text-yellow-400 font-bold border-b-2 border-yellow-400' : ''
              }`}
            >
              {link.label[lang] || link.label.om}
            </Link>
          ))}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-emerald-800 text-white rounded px-2 py-1 text-xs font-bold border border-emerald-700"
          >
            <option value="om">OM</option>
            <option value="am">AM</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </nav>
      </div>
    </header>
  );
}