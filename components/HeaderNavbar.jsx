import { useLanguage } from '../context/LanguageContext';

export default function HeaderNavbar() {
  const { lang, changeLanguage } = useLanguage();

  const languages = [
    { code: 'om', name: 'Afaan Oromoo' },
    { code: 'am', name: 'አማርኛ' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  const titles = {
    om: 'Majiilisa Kuta Magaala Melka Nono',
    am: 'የመልካ ኖኖ ክፍለ ከተማ እስልምና ጉዳዮች',
    en: 'Melka Nono Sub-City Islamic Affairs',
    ar: 'مجلس الشؤون الإسلامية لمدينة ملكا نونو'
  };

  return (
    <header className="bg-emerald-900 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">{titles[lang]}</h1>
      
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm">🌐</span>
        <select 
          value={lang} 
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-emerald-800 text-white px-3 py-1.5 rounded border border-emerald-600 focus:outline-none cursor-pointer"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}