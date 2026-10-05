'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import FadeIn from '../components/FadeIn';

export default function HomePage() {
  const { lang } = useLanguage();

  const content = {
    badge: {
      om: '🏛️ Piroojektii Seenaqabeessa G+3 & Geejjibaa',
      am: '🏛️ ታሪካዊ የ G+3 ህንጻ እና ትራንስፖርት ፕሮጀክት',
      en: '🏛️ Historic G+3 Building & Transport Project',
      ar: '🏛️ مشروع بناء G+3 والمواصلات التاريخي'
    },
    title: {
      om: 'Gamoo Majiilisa Kuta Magaala Melka Nono Ijaaruu',
      am: 'የመልካ ኖኖ ክፍለ ከተማ መጅሊስ ህንፃ እና የኢኮኖሚ ልማት',
      en: 'Melka Nono Sub-City Majlis Commercial & Cultural Center',
      ar: 'مركز مجلس مقاطعة ملكا نونو التجاري والثقافي'
    },
    subtitle: {
      om: 'Aanaalee 3 fi Masgiidota 85 qindeessuudhaan mogaasa hawaasaa, waafqii dhaabbataa fi geejjiba ammayyeessuu utubuu.',
      am: 'በ 3 ወረዳዎች እና 85 መስጊዶች አስተባባሪነት የኢኮኖሚ አቅምን፣ ዘላቂ ወቅፍን እና የትራንስፖርት አገልግሎትን ለማጠናከር የቀረበ ጥሪ።',
      en: 'Uniting 3 districts and 85 mosques to establish sustainable Waqf revenue, office spaces, and community transport infrastructure.',
      ar: 'توحيد 3 مناطق و 85 مسجداً لتأسيس وقف مستدام وبنية تحتية للمجتمع.'
    },
    raised: { om: 'Qarshii Walitti Qabame', am: 'የተሰበሰበ ገንዘብ', en: 'Total Raised', ar: 'المبلغ المجمع' },
    target: { om: 'Goolii Bajataa (Target)', am: 'የተያዘው ግብ', en: 'Target Budget', ar: 'الميزانية المستهدفة' },
    pledgeBtn: { om: 'Waadaa Galii (Pledge Now)', am: 'ቃለ ኪዳን ይግቡ', en: 'Pledge Donation', ar: 'تقديم التعهد' },
    reportBtn: { om: 'Gabaasa Faayinaansii', am: 'የገንዘብ ሪፖርት', en: 'Financial Report', ar: 'التقرير المالي' },
    
    stats: [
      { val: 'ETB 190M', label: { om: 'Bajata Waliigalaa', am: 'አጠቃላይ በጀት', en: 'Total Budget', ar: 'الميزانية الإجمالية' }, icon: '💰' },
      { val: 'G+3', label: { om: 'Kutaawwan Gamoo', am: 'የፎቅ ብዛት', en: 'Building Floors', ar: 'عدد الطوابق' }, icon: '🏢' },
      { val: '85+', label: { om: 'Masgiidota Deoggarani', am: 'ደጋፊ መስጊዶች', en: 'Partner Mosques', ar: 'المساجد المشاركة' }, icon: '🕌' },
      { val: '3 Zones', label: { om: 'Aanaalee Wajjiraa', am: 'የወረዳ ጽሕፈት ቤቶች', en: 'Districts Included', ar: 'المناطق المشمولة' }, icon: '📍' }
    ],

    pillarsTitle: {
      om: 'Utubaalee Guguddoo Piroojektichaa',
      am: 'የፕሮጀክቱ ዋነኛ ዋና ዋና ክፍሎች',
      en: 'Core Project Pillars',
      ar: 'أركان المشروع الرئيسية'
    },
    pillars: [
      {
        icon: '🏢',
        tag: { om: 'Gamoo G+3', am: 'የ G+3 ህንጻ', en: 'G+3 Building', ar: 'مبنى G+3' },
        title: { om: 'Wafqii fi Galma Hawaasaa', am: 'የወቅፍ እና የማህበረሰብ አዳራሽ', en: 'Waqf & Community Center', ar: 'المركز الوقفي والمجتمعي' },
        desc: { om: 'Dukaanoota 18 galii dhaabbataa maddisiisan, galma walga\'ii namoota 1,000+ fi wajjiraalee ammayyaa.', am: 'ቋሚ ገቢ የሚያስገኙ 18 የንግድ ሱቆች፣ ከ 1,000 በላይ ሰዎችን የሚያስተናግድ አዳራሽ እና ዘመናዊ ቢሮዎች።', en: '18 revenue-generating commercial shops, a 1,000+ capacity event hall, and sub-city offices.', ar: '18 محلاً تجارياً وقفيًا وقاعة اجتماعات تتسع لـ 1,000 شخص.' }
      },
      {
        icon: '🚌',
        tag: { om: 'Geejjiba', am: 'ትራንስፖርት', en: 'Transportation', ar: 'النقل والمواصلات' },
        title: { om: 'Geejjiba Hawaasaa fi Tajaajila', am: 'የህዝብ ትራንስፖርት እና አገልግሎት', en: 'Public Transport Fleet', ar: 'أسطول النقل العام' },
        desc: { om: 'Mootaraa fi konkolaattota tajaajila hawaasaa fi deeggarsa idil-aanaa lafamsiisan ammayyeessuu.', am: 'የህዝብ አገልግሎትን እና የወረዳዎችን ግንኙነት የሚያፋጥኑ የትራንስፖርት ተሽከርካሪዎችን ማሟላት።', en: 'Fleet acquisition for public logistics, community mobility, and inter-district coordination.', ar: 'توفير وسائل النقل لتعزيز خدمات المجتمع بين المناطق.' }
      },
      {
        icon: '💼',
        tag: { om: 'Dhaabbatummaa', am: 'ዘላቂ ልማት', en: 'Sustainability', ar: 'الاستدامة' },
        title: { om: 'Galii Dhaabbataa Majiilisaa', am: 'የመጅሊሱ ቋሚ ገቢ', en: 'Sustainable Majlis Revenue', ar: 'Sustainable Majlis Revenue', ar: 'الدخل المستدام للمجلس' },
        desc: { om: 'Bara baraan deeggarsa irratti hirkachuu malee Majiilisa uf-danda\'e uumuu fi hojii tola-oltummaa babal\'isuu.', am: 'በቋሚነት በልመና ላይ ሳይደገፍ መጅሊሱን በራሱ የሚቆምበትን እና በጎ አድራጎቶችን የሚያስፋፋበትን መዋቅር መገንባት።', en: 'Creating financial independence for the Majlis to fund ongoing social and religious programs.', ar: 'تحقيق الاستقلال المالي للمجلس لتمويل البرامج الاجتماعية والدينية.' }
      }
    ]
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Card */}
      <FadeIn delay={0.1} direction="up">
        <section 
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200/60"
          style={{ backgroundColor: '#F5F5DC' }}
        >
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900 text-amber-300 text-xs md:text-sm font-semibold shadow-sm">
              {content.badge[lang]}
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-emerald-950">
              {content.title[lang]}
            </h1>

            <p className="text-emerald-900/90 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
              {content.subtitle[lang]}
            </p>

            <div className="mt-8 p-6 bg-emerald-950 text-white rounded-2xl shadow-md border border-emerald-800 space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm font-semibold">
                <span className="text-emerald-300">{content.raised[lang]}: <strong className="text-white text-base md:text-lg">ETB 0.00</strong></span>
                <span className="text-amber-400">{content.target[lang]}: <strong className="text-white text-base md:text-lg">ETB 190,000,000</strong></span>
              </div>

              <div className="w-full h-4 bg-emerald-900 rounded-full overflow-hidden p-0.5 border border-emerald-700">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full w-[2%]" />
              </div>

              <div className="flex justify-between items-center text-xs text-emerald-200">
                <span>0% Xumurame</span>
                <span className="text-amber-300 font-bold">ETB 190,000,000 Hafe</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/fundraising"
                className="px-8 py-4 bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-extrabold rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5"
              >
                {content.pledgeBtn[lang]}
              </Link>
              <Link
                href="/budget"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg transition duration-200"
              >
                {content.reportBtn[lang]}
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Grid Key Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {content.stats.map((st, idx) => (
          <FadeIn key={idx} delay={0.2 + idx * 0.1} direction="up">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition">
              <div className="text-3xl p-3 bg-amber-50 rounded-xl">{st.icon}</div>
              <div>
                <p className="text-2xl font-black text-slate-900">{st.val}</p>
                <p className="text-xs text-slate-500 font-medium">{st.label[lang]}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Pillars / Features */}
      <section className="space-y-8">
        <FadeIn delay={0.2}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              {content.pillarsTitle[lang]}
            </h2>
            <div className="w-12 h-1 bg-emerald-700 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.pillars.map((pil, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.15} direction="up">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-600 transition duration-300 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl">{pil.icon}</span>
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-emerald-900 rounded-full">
                    {pil.tag[lang]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pil.title[lang]}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pil.desc[lang]}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}