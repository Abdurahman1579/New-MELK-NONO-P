'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function ContactPage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Quunnamtii fi Teessoo Arjoomaa',
      am: 'ግንኙነት እና የበጎ አድራጎት መረጃ',
      en: 'Contact & Donation Channels',
      ar: 'التواصل ومعلومات التبرع'
    },
    subtitle: {
      om: 'Odeeffannoo Herrega Baankii Majiilisaa fi Lakkoofsa Teessoo Wajjiraa',
      am: 'የመጅሊሱ የባንክ ሒሳብ መረጃ እና የጽሕፈት ቤት አድራሻ',
      en: 'Official Majlis bank accounts and administration office contact details',
      ar: 'معلومات الحسابات البنكية الرسمية وأرقام التواصل'
    },
    bankAccounts: [
      {
        bank: 'CBE (Baankii Daldala Itoophiyaa)',
        account: '1000XXXXXXXXX',
        name: 'Majiilisa Kuta Magaala Melka Nono'
      },
      {
        bank: 'CBE Birr',
        account: '*889# / 09XXXXXXXX',
        name: 'Majiilisa Melka Nono'
      },
      {
        bank: 'Baankii Hijraa (Hijra Bank)',
        account: '100XXXXXXXXX',
        name: 'Melka Nono Majlis Office'
      },
      {
        bank: 'Baankii Zamzam (ZamZam Bank)',
        account: '200XXXXXXXXX',
        name: 'Melka Nono Majlis Office'
      }
    ],
    contactInfo: {
      locationTitle: { om: 'Teessoo Wajjiraa', am: 'የጽሕፈት ቤት አድራሻ', en: 'Office Location', ar: 'عنوان المكتب' },
      locationText: {
        om: 'Itoophiyaa, Oromiyaa, Dhiha Shawaa, Magaala Melka Nono',
        am: 'ኢትዮጵያ፣ ኦሮሚያ፣ ምዕራብ ሸዋ፣ መልካ ኖኖ ከተማ',
        en: 'Melka Nono Town, West Shewa Zone, Oromia, Ethiopia',
        ar: 'بلدة ملكا نونو، غرب شوآ، أوروميا، إثيوبيا'
      },
      phoneTitle: { om: 'Lakkoofsa Bilbilaa', am: 'ስልክ ቁጥር', en: 'Phone Numbers', ar: 'أرقام الهاتف' },
      phones: ['+251 911 XX XX XX', '+251 922 XX XX XX'],
      emailTitle: { om: 'Imeelii', am: 'ኢሜይል', en: 'Email Address', ar: 'البريد الإلكتروني' },
      email: 'info@melkanonomajlis.org'
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-2">{content.title[lang]}</h1>
        <p className="text-emerald-100 text-lg">{content.subtitle[lang]}</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bank Accounts */}
        <div className="bg-white p-6 rounded-2xl shadow border border-slate-200 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-900 border-b pb-3">
            {lang === 'om' && 'Herrega Baankii Arjoomaa'}
            {lang === 'am' && 'የመዋጮ የባንክ ሒሳቦች'}
            {lang === 'en' && 'Bank Accounts for Donation'}
            {lang === 'ar' && 'الحسابات المصرفية للتبرع'}
          </h2>
          <div className="space-y-4">
            {content.bankAccounts.map((acc, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-semibold text-emerald-800">{acc.bank}</p>
                <p className="text-xl font-extrabold text-slate-800 my-1">{acc.account}</p>
                <p className="text-xs text-slate-500">{acc.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-2xl shadow border border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-emerald-900 border-b pb-3">
            {lang === 'om' && 'Odeeffannoo Quunnamtii'}
            {lang === 'am' && 'የግንኙነት መረጃ'}
            {lang === 'en' && 'Contact Information'}
            {lang === 'ar' && 'معلومات الاتصال'}
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">{content.contactInfo.locationTitle[lang]}</h3>
              <p className="text-slate-600 text-sm">{content.contactInfo.locationText[lang]}</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-1">{content.contactInfo.phoneTitle[lang]}</h3>
              <p className="text-slate-600 text-sm">{content.contactInfo.phones.join(' / ')}</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-1">{content.contactInfo.emailTitle[lang]}</h3>
              <p className="text-slate-600 text-sm">{content.contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}