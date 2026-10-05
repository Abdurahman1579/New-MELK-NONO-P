'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Waa\'ee Piroojektichaa fi Ka\'umsa Isaa',
      am: 'ስለ ፕሮጀክቱ እና አመሰራረቱ',
      en: 'About the Project & Background',
      ar: 'عن المشروع وخلفيته'
    },
    subtitle: {
      om: 'Majiilisa Kuta Magaala Melka Nono - Wajjiraalee Aanaa 3 fi Masgiidota 85 Bakka Bu\'uun',
      am: 'የመልካ ኖኖ ክፍለ ከተማ መጅሊስ - 3 የወረዳ ጽሕፈት ቤቶች እና 85 መስጊዶችን በመወከል',
      en: 'Melka Nono Sub-city Majlis - Representing 3 District Offices and 85 Mosques',
      ar: 'مجلس مقاطعة ملكا نونو - يمثل 3 مكاتب فرعية و85 مسجداً'
    },
    backgroundTitle: {
      om: 'Seenaa fi Ka\'umsa (Background)',
      am: 'ታሪክ እና መነሻ',
      en: 'History & Background',
      ar: 'التاريخ والخلفية'
    },
    backgroundDesc: {
      om: 'Majiilisni Kuta Magaala Melka Nono wajjiraalee Aanaa 3 fi Masgiidota 85 kan to\'atuu fi tajaajilu yoo ta\'u, yeroo ammaa kana rakkoo teessuma Wajjiraa, Geejjibaa, fi Galii Dhaabbataa malee tajaajila kaffalaa jira. Rakkoo kana dhaabbataan furuudhaaf piroojektii ijaarsa Gamoo G+3 fi Muka Qabeenya Zalaqii galma Qarshii 190,000,000 qabu kana bocuu danda\'eera.',
      am: 'የመልካ ኖኖ ክፍለ ከተማ መጅሊስ 3 የወረዳ ጽሕፈት ቤቶችን እና 85 መስጊዶችን የሚያስተዳድር ሲሆን፣ በአሁኑ ወቅት የጽሕፈት ቤት፣ የትራንስፖርት እና የቋሚ ገቢ እጥረት አለበት። ይህንን ችግር በጥቅል ለመፍታት የ 190,000,000 ብር በጀት ያለው የ G+3 ሕንፃ እና የቋሚ ሀብት ልማት ፕሮጀክት ተቀርጿል።',
      en: 'Melka Nono Sub-city Majlis oversees 3 District Offices and 85 Mosques. Currently facing severe infrastructure, transport, and financial sustainability challenges, this 190 Million ETB G+3 Building & Sustainable Asset project has been designed.',
      ar: 'يُشرف مجلس مقاطعة ملكا نونو على 3 مكاتب فرعية و85 مسجداً. لمواجهة التحديات اللوجستية والمالية، تم تصميم مشروع بناء G+3 بقيمة 190 مليون بر.'
    },
    goalsTitle: {
      om: 'Galma Piroojektichaa (Main Goals)',
      am: 'የፕሮጀክቱ ዋና ዋና ግቦች',
      en: 'Main Project Goals',
      ar: 'أهداف المشروع الرئيسية'
    },
    goals: [
      {
        om: 'Ijaarsa Gamoo G+3 (1,600 m²) bajata Qarshii 160,000,000n xumuruu.',
        am: 'የ G+3 ሕንፃ በ 160,000,000 ብር በጀት መገንባት።',
        en: 'Construct G+3 Building (1,600 m²) with a budget of 160,000,000 ETB.',
        ar: 'بناء مبنى G+3 بميزانية 160,000,000 بر إثيوبي.'
      },
      {
        om: 'Konkolaattota 3 (1 Service + 2 EV) Qarshii 11,500,000n bituu.',
        am: '3 ተሽከርካሪዎችን በ 11,500,000 ብር መግዛት።',
        en: 'Acquire 3 Vehicles (1 Service + 2 EV) budgeted at 11,500,000 ETB.',
        ar: 'شراء 3 مركبات بميزانية 11,500,000 بر إثيوبي.'
      },
      {
        om: 'Meeshaalee Wajjiraa fi Teeknoolojii Qarshii 5,000,000n guuttachuu.',
        am: 'የጽሕፈት ቤት እና ቴክኖሎጂ ዕቃዎችን በ 5,000,000 ብር ማሟላት።',
        en: 'Equip offices with IT & Technology for 5,000,000 ETB.',
        ar: 'تجهيز المكاتب بالتقنية بميزانية 5,000,000 بر.'
      },
      {
        om: 'Suphaa fi Operaashinii Zalaqiif Qarshii 13,500,000 olkaa\'achuu.',
        am: 'ለጥገና እና ዘላቂ ሥራዎች 13,500,000 ብር መመደብ።',
        en: 'Reserve 13,500,000 ETB for maintenance & sustainable operations.',
        ar: 'تخصيص 13,500,000 بر للصيانة والتشغيل.'
      }
    ],
    impactTitle: {
      om: 'Bu\'aa Hawaasummaa (Community Impact)',
      am: 'ማህበራዊ እና ኢኮኖሚያዊ ጥቅም',
      en: 'Community Impact',
      ar: 'الأثر الاجتماعي والاقتصادي'
    },
    impactDesc: {
      om: 'Piroojektiin kun tajaajila majiilisaa ammayyeessuu bira darbee Masgiidota 85 deeggarsa teeknikaa fi faayinaansii akka argatan gocha. Akkuma sanas galii kireessa suqii fi iddoo daldalaa gamoo sana irraa argamuun dhaabbilicha of danda\'aa godha.',
      am: 'ይህ ፕሮጀክት የመጅሊሱን አገልግሎት ማዘመን ብቻ ሳይሆን ለ 85 መስጊዶች የፋይናንስ እና ቴክኒክ ድጋፍ ያደርጋል። ከ ሕንፃው የሚገኘው የኪራይ ገቢም ተቋሙን በራሱ የሚቆም ያደርገዋል።',
      en: 'This project modernizes Majlis operations, directly benefiting 85 mosques through technical and financial support, establishing long-term financial self-reliance through rental revenues.',
      ar: 'يعزز هذا المشروع خدمات المجلس ويدعم 85 مسجداً، مما يحقق الاستقلال المالي للمجلس عبر إيرادات الإيجار.'
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <section className="bg-emerald-800 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-3">{content.title[lang]}</h1>
        <p className="text-emerald-100 text-lg">{content.subtitle[lang]}</p>
      </section>

      {/* Background Section */}
      <section className="bg-white p-6 rounded-2xl shadow border border-slate-100">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">{content.backgroundTitle[lang]}</h2>
        <p className="text-slate-700 leading-relaxed text-base">{content.backgroundDesc[lang]}</p>
      </section>

      {/* Main Goals */}
      <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">{content.goalsTitle[lang]}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.goals.map((goal, index) => (
            <li key={index} className="bg-white p-4 rounded-xl border border-emerald-200 flex items-start gap-3 shadow-sm">
              <span className="bg-emerald-600 text-white font-bold w-7 h-7 flex items-center justify-center rounded-full shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-slate-800 font-medium">{goal[lang]}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Impact Section */}
      <section className="bg-white p-6 rounded-2xl shadow border border-slate-100">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">{content.impactTitle[lang]}</h2>
        <p className="text-slate-700 leading-relaxed text-base">{content.impactDesc[lang]}</p>
      </section>
    </div>
  );
}