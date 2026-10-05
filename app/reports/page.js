'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function ReportsPage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Gabaasaa fi Oduu Ijaarsa Gamoo',
      am: 'የግንባታ ሪፖርት እና ዜናዎች',
      en: 'Progress Reports & Latest News',
      ar: 'تقارير الإنجاز والأخبار الحصرية'
    },
    subtitle: {
      om: 'Oduu Yeroo, Gabaasa Auditi Keessoo, fi Sochii Ijaarsa Gamoo Majiilisaa',
      am: 'የወቅቱ ዜናዎች፣ የውስጥ ኦዲት ሪፖርት እና የመጅሊስ ሕንፃ ግንባታ እንቅስቃሴዎች',
      en: 'Real-time updates, audit documentation, and construction milestones',
      ar: 'التحديثات المباشرة، تقارير التدقيق، ومراحل بناء المشروع'
    },
    reports: [
      {
        date: '01/10/2026',
        tag: { om: 'Gabaasa Auditi', am: 'የኦዲት ሪፖርት', en: 'Audit Report', ar: 'تقرير التدقيق' },
        title: {
          om: 'Gabaasa Auditi Ji\'a Qorannoo Faayinaansii Piroojektichaa',
          am: 'የመጀመሪያው ሩብ ዓመት የፋይናንስ ኦዲት ሪፖርት',
          en: 'First Quarter Financial Audit Report',
          ar: 'تقرير التدقيق المالي للربع الأول'
        },
        desc: {
          om: 'Gabaasa herrega baankii fi deeggarsa walitti qabame ilaalchisee auditing keessoo geggeeffame.',
          am: 'የተሰበሰበውን ድጋፍ እና የባንክ ሒሳብ የሚያሳይ የውስጥ ኦዲት ሪፖርት ተጠናቋል።',
          en: 'Internal financial audit completed covering collected pledges and bank deposits.',
          ar: 'تم إكمال التدقيق المالي الداخلي الذي تغطي التبرعات وحسابات البنك.'
        }
      },
      {
        date: '25/09/2026',
        tag: { om: 'Oduu Ijaarsaa', am: 'የግንባታ ዜና', en: 'Construction Update', ar: 'تحديث البناء' },
        title: {
          om: 'Qophii Lafa G+3 fi Mirkaneessa Dizaayinii Dhumaa',
          am: 'የ G+3 ሕንፃ መሬት ዝግጅት እና የመጨረሻ ዲዛይን ማጽደቅ',
          en: 'Site Preparation & Final Structural Design Approval',
          ar: 'تجهيز موقع البناء واعتماد التصميم النهائي'
        },
        desc: {
          om: 'Laffi ijaarsa gamoo G+3 qophaa\'ee dizaayiniin injinaroota dhihaate mirkanaa\'ee jira.',
          am: 'ለ G+3 ሕንፃ ግንባታ የተዘጋጀው ቦታ እና በኢንጂነሮች የቀረበው ዲዛይን ጸድቋል።',
          en: 'Site layout finalized and structural engineering blueprints approved.',
          ar: 'تم إنهاء المخطط الموقعي واعتماد التصاميم الهندسية.'
        }
      }
    ]
  };

  return (
    <div className="space-y-8">
      <section className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-2">{content.title[lang]}</h1>
        <p className="text-emerald-100 text-lg">{content.subtitle[lang]}</p>
      </section>

      <div className="space-y-6">
        {content.reports.map((item, index) => (
          <article key={index} className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-extrabold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                {item.tag[lang]}
              </span>
              <span className="text-xs text-slate-400 font-medium">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title[lang]}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc[lang]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}