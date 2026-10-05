'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function GovernancePage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Caasaa fi Hoggansa Piroojektichaa',
      am: 'የፕሮጀክቱ መዋቅር እና አመራር',
      en: 'Project Governance & Leadership',
      ar: 'الهيكل التنظيمي والقيادة'
    },
    subtitle: {
      om: 'Majiilisa Kuta Magaala Melka Nono, Koree Gamoo fi Koree Audit',
      am: 'የመልካ ኖኖ ክፍለ ከተማ መጅሊስ፣ የሕንፃ ኮሚቴ እና የኦዲት ኮሚቴ',
      en: 'Melka Nono Sub-city Majlis, Building Committee & Audit Team',
      ar: 'مجلس مقاطعة ملكا نونو، لجنة المبنى ولجنة التدقيق'
    },
    sections: [
      {
        role: {
          om: 'Majiilisa Kuta Magaala Melka Nono',
          am: 'የመልካ ኖኖ ክፍለ ከተማ መጅሊስ',
          en: 'Melka Nono Sub-city Majlis Executive',
          ar: 'المجلس التنفيذي لمقاطعة ملكا نونو'
        },
        desc: {
          om: 'Ol-aantummaadhaan piroojekticha kan ajaju, karoora yeroo fi bajata to\'atu, akkasumas gabaasa dhumaa kan mirkaneessudha.',
          am: 'በበላይነት ፕሮጀክቱን የሚመራ፣ የጊዜ ሰሌዳ እና በጀት የሚቆጣጠር እንዲሁም የመጨረሻ ሪፖርቶችን የሚያጸድቅ አካል።',
          en: 'Provides strategic oversight, budget control, and ultimate project approval.',
          ar: 'الإشراف الاستراتيجي والرقابة على الميزانية والموافقة النهائية.'
        }
      },
      {
        role: {
          om: 'Koree Ijaarsa Gamoo (Building Committee)',
          am: 'የሕንፃ ግንባታ ኮሚቴ',
          en: 'Building Construction Committee',
          ar: 'لجنة بناء المشروع'
        },
        desc: {
          om: 'Sochii ijaarsaa guyyaa guyyaa kan hordofu, kondraaktaroota fi inshooraansii waliin kan hojjetu, qulqullina ijaarsaa kan to\'atu.',
          am: 'የዕለት ተዕለት የግንባታ እንቅስቃሴን የሚከታተል፣ ከኮንትራክተሮች ጋር የሚሰራ እና የግንባታ ጥራትን የሚቆጣጠር።',
          en: 'Manages day-to-day construction activities, contractor liaisons, and quality assurance.',
          ar: 'إدارة عمليات البناء اليومية، والتواصل مع المقاولين، وضمان الجودة.'
        }
      },
      {
        role: {
          om: 'Koree Faayinaansii fi Auditi Keessoo',
          am: 'የፋይናንስ እና የውስጥ ኦዲት ኮሚቴ',
          en: 'Finance & Internal Audit Committee',
          ar: 'لجنة المالية والتدقيق الداخلي'
        },
        desc: {
          om: 'Baasii fi galii hunda galmeessuu, oditi ji\'a ji\'aa geggeessuu fi gabaasa iftoominaa hawaasaaf qopheessuu.',
          am: 'ወጪ እና ገቢን መመዝገብ፣ በየወሩ የውስጥ ኦዲት ማድረግ እና ለሕዝብ ግልጽ ሪፖርት ማዘጋጀት።',
          en: 'Records revenue/expenses, conducts monthly audits, and prepares public transparency reports.',
          ar: 'تسجيل الإيرادات والمصروفات، وإجراء التدقيق الشهري، وإعداد تقارير الشفافية.'
        }
      },
      {
        role: {
          om: 'Wajjiraalee Aanaa 3 (3 District Offices)',
          am: '3 የወረዳ ጽሕፈት ቤቶች',
          en: '3 District Sub-Offices',
          ar: '3 مكاتب فرعية للمناطق'
        },
        desc: {
          om: 'Aanaalee 3n Majiilisa Melka Nono jala jiran keessatti hawaasa qindeessuu fi arjooma walitti qabamu hordofuu.',
          am: 'በመልካ ኖኖ መጅሊስ ሥር ባሉ 3 ወረዳዎች ሕዝቡን ማስተባበር እና የገንዘብ ማሰባሰብ ሥራውን መከታተል።',
          en: 'Mobilizes local communities across 3 district zones and coordinates regional fundraising.',
          ar: 'تعبئة المجتمعات المحلية في 3 مناطق وتنسيق جمع التبرعات.'
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.sections.map((sec, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-lg">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{sec.role[lang]}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">{sec.desc[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}