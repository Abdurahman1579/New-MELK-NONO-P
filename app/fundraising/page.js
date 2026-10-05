'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function FundraisingPage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Gulaala Deeggarsaa fi Sadarkaa Arjoomtotaa',
      am: 'የገንዘብ ማሰባሰብ እና የለጋሾች ደረጃ',
      en: 'Fundraising Matrix & Donation Tiers',
      ar: 'مصفوفة جمع التبرعات وفئات المتبرعين'
    },
    subtitle: {
      om: 'Akkaataa Hirmaannaa fi Galma Maallaqaa Walitti Qabamuun',
      am: 'የተሳትፎ ሁኔታ እና የተመደበው የገንዘብ ግብ',
      en: 'Participation Framework & Financial Targets',
      ar: 'إطار المشاركة والأهداف المالية'
    },
    tiers: [
      {
        target: '80,000,000 ETB',
        category: {
          om: 'Abbootii Qabeenyaa Gurguddoo',
          am: 'ከፍተኛ ባለሀብቶች',
          en: 'Major Business Investors',
          ar: 'كبار رجال الأعمال'
        },
        desc: {
          om: 'Hirmaannaa abbootii qabeenyaa gurguddoo fi investaraa.',
          am: 'የከፍተኛ ባለሀብቶች እና ኢንቨስተሮች አስተዋጽኦ።',
          en: 'Contributions from major investors and business leaders.',
          ar: 'مساهمات من كبار المستثمرين ورجال الأعمال.'
        }
      },
      {
        target: '45,000,000 ETB',
        category: {
          om: 'Abbootii Qabeenyaa Giddu-galeessaa',
          am: 'መካከለኛ ባለሀብቶች',
          en: 'Medium Enterprise Owners',
          ar: 'أصحاب الأعمال المتوسطة'
        },
        desc: {
          om: 'Deeggarsa abbootii qabeenyaa giddu-galeessaa.',
          am: 'የመካከለኛ ደረጃ ባለሀብቶች ድጋፍ።',
          en: 'Support from mid-tier entrepreneurs and businesses.',
          ar: 'دعم من رواد الأعمال والشركات المتوسطة.'
        }
      },
      {
        target: '30,000,000 ETB',
        category: {
          om: "Hawaasa Waliigalaa fi Jaarraa",
          am: 'பொது ማህበረሰብ እና ጃማዓ',
          en: "General Community & Jama'ah",
          ar: 'عامة المجتمع والجماعة'
        },
        desc: {
          om: 'Arjooma uummata waliigalaa fi miseensota maatii.',
          am: 'የሕዝብ እና የቤተሰብ አባላት በጎ አድራጎት አስተዋጽኦ።',
          en: 'General public donations and community pledges.',
          ar: 'تبرعات عامة المجتمع وأفراد الجماعة.'
        }
      },
      {
        target: '20,000,000 ETB',
        category: {
          om: 'Masgiidota 85n Melka Nono',
          am: 'የመልካ ኖኖ 85 መስጊዶች',
          en: '85 Melka Nono Mosques',
          ar: '85 مسجداً في ملكا نونو'
        },
        desc: {
          om: 'Gumaacha qindaa\'aa masgiidota 85n aanaa kana keessa jiran.',
          am: 'በወረዳው ውስጥ በሚገኙ 85 መስጊዶች የሚሰበሰብ አስተዋጽኦ።',
          en: 'Collective contributions from 85 local mosques.',
          ar: 'المساهمات الجماعية من 85 مسجداً محلياً.'
        }
      },
      {
        target: '15,000,000 ETB',
        category: {
          om: 'Dhaabbata Daldalaa fi Tumstoota',
          am: 'የንግድ ተቋማት እና አጋሮች',
          en: 'Corporate & Partners',
          ar: 'الشركات والشركاء'
        },
        desc: {
          om: 'Deeggarsa dhaabbilee daldalaa fi hawaasummaatiin dhihaatu.',
          am: 'ከንግድ እና ከማህበራዊ ተቋማት የሚገኝ ድጋፍ።',
          en: 'Corporate social responsibility partnerships and grants.',
          ar: 'الشراكات المؤسسية والتبرعات التجارية.'
        }
      }
    ],
    transparencyTitle: {
      om: 'Ittisa fi To\'annoo Maallaqaa (Accountability & Transparency)',
      am: 'የፋይናንስ ተጠያቂነት እና ግልጽነት',
      en: 'Financial Accountability & Transparency',
      ar: 'الشفافية والمساءلة المالية'
    },
    transparencyDesc: {
      om: 'Maallaqni walitti qabamu hundi herrega baankii majiilisaa dhuunfaatiin qofa kan walitti qabamu yoo ta\'u, ji\'a ji\'aan auditi keessoo fi alaa kan geggeeffamuufi gabaasni ifatti hawaasaaf kan dhihaatudha.',
      am: 'የሚሰበሰበው ገንዘብ በሙሉ በመጅሊሱ ይፋዊ የባንክ ሒሳብ ብቻ የሚሰበሰብ ሲሆን፣ በየወሩ የውስጥ እና የውጭ ኦዲት ተደርጎ ለሕዝብ ይፋ ይደረጋል።',
      en: 'All collected funds flow directly into official Majlis bank accounts, audited monthly by internal and external financial auditors with public reports.',
      ar: 'تدفق جميع الأموال مباشرة إلى حسابات المجلس Bank الرسمية، مع تدقيق شهري تقارير علنية.'
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-2">{content.title[lang]}</h1>
        <p className="text-emerald-100 text-lg">{content.subtitle[lang]}</p>
      </section>

      {/* Donation Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.tiers.map((tier, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
            <div>
              <span className="text-xs font-extrabold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase">
                Tier {index + 1}
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-3 mb-2">{tier.category[lang]}</h3>
              <p className="text-slate-600 text-sm mb-4">{tier.desc[lang]}</p>
            </div>
            <div className="bg-yellow-50 text-yellow-800 font-extrabold text-lg px-4 py-2 rounded-xl text-center border border-yellow-200">
              {tier.target}
            </div>
          </div>
        ))}
      </div>

      {/* Transparency Banner */}
      <section className="bg-white p-6 rounded-2xl shadow border-l-8 border-emerald-600">
        <h2 className="text-2xl font-bold text-emerald-900 mb-2">{content.transparencyTitle[lang]}</h2>
        <p className="text-slate-700 leading-relaxed">{content.transparencyDesc[lang]}</p>
      </section>
    </div>
  );
}