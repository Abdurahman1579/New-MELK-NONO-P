'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function BudgetPage() {
  const { lang } = useLanguage();

  const content = {
    title: {
      om: 'Qabiyyee Piroojektii fi Hirmaannaa Bajataa',
      am: 'የፕሮጀክት ይዘት እና የበጀት ክፍፍል',
      en: 'Project Components & Budget Breakdown',
      ar: 'مكونات المشروع وتوزيع الميزانية'
    },
    subtitle: {
      om: 'Waliigala Bajata Qarshii 190,000,000 ETB',
      am: 'ጠቅላላ በጀት 190,000,000 ETB',
      en: 'Total Budget 190,000,000 ETB',
      ar: 'إجمالي الميزانية 190,000,000 بر إثيوبي'
    },
    items: [
      {
        name: {
          om: 'Gamoo G+3 Ijaarsisuu (1,600 m²)',
          am: 'የ G+3 ሕንፃ ግንባታ (1,600 ሜ²)',
          en: 'G+3 Building Construction (1,600 m²)',
          ar: 'بناء مبنى G+3 (1,600 متر مربع)'
        },
        amount: '160,000,000 ETB',
        desc: {
          om: 'Wajjiraalee, suqiiwwan kireeffaman, fi galma walga\'ii ammayyaa\'aa hammata.',
          am: 'መደብሮች፣ የተከራዩ ቢሮዎች እና ዘመናዊ የስብሰባ አዳራሽ ያካትታል።',
          en: 'Includes offices, rentable shops, and a modern conference hall.',
          ar: 'يشمل مكاتب ومتاجر للايجار وقاعة اجتماعات حديثة.'
        }
      },
      {
        name: {
          om: 'Bitoota Konkolaattotaa (3 Vehicles)',
          am: 'የተሽከርካሪዎች ግዥ (3 ተሽከርካሪዎች)',
          en: 'Vehicle Acquisition (3 Vehicles)',
          ar: 'شراء المركبات (3 مركبات)'
        },
        amount: '11,500,000 ETB',
        desc: {
          om: 'Konkolaataa Tajaajilaa 1 fi Konkolaattota Elektriikaa (EV) 2.',
          am: '1 የአገልግሎት መኪና እና 2 የኤሌክትሪክ ተሽከርካሪዎች (EV)።',
          en: '1 Service Vehicle and 2 Electric Vehicles (EV).',
          ar: 'سيارة خدمة واحدة وسيارتان كهربائيتان.'
        }
      },
      {
        name: {
          om: 'Meeshaalee Wajjiraa fi Teeknoolojii',
          am: 'የጽሕፈት ቤት እና ቴክኖሎጂ ዕቃዎች',
          en: 'Office & IT Equipment',
          ar: 'المعدات المكتبية والتقنية'
        },
        amount: '5,000,000 ETB',
        desc: {
          om: 'Kompiutaroota, meeshaalee wajjiraa, fi sirna teeknoolojii ammayyaa.',
          am: 'ኮምፒውተሮች፣ የቢሮ ዕቃዎች እና ዘመናዊ የቴክኖሎጂ ሥርዓት።',
          en: 'Computers, office furniture, and modern IT systems.',
          ar: 'أجهزة كمبيوتر، أثاث مكتبي، وأنظمة تقنية حديثة.'
        }
      },
      {
        name: {
          om: 'Suphaa, Contingency fi Operaashinii',
          am: 'ጥገና፣ ድገተኛ ወጪዎች እና ሥራ ማስኬጃ',
          en: 'Maintenance & Operational Reserves',
          ar: 'الصيانة والاحتياطي التشغيلي'
        },
        amount: '13,500,000 ETB',
        desc: {
          om: 'Bajata qophiidhaaf olkaa\'amee fi suphaa zalaqii piroojektichaaf oolu.',
          am: 'ለአስቸኳይ ሁኔታዎች እና ለዘላቂ ጥገና የተመደበ በጀት።',
          en: 'Reserved for contingencies and long-term maintenance.',
          ar: 'ميزانية مخصصة للطوارئ والصيانة طويلة الأجل.'
        }
      }
    ]
  };

  return (
    <div className="space-y-8">
      <section className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-2">{content.title[lang]}</h1>
        <p className="text-yellow-400 font-bold text-xl">{content.subtitle[lang]}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">{item.name[lang]}</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">{item.desc[lang]}</p>
            </div>
            <div className="bg-emerald-50 text-emerald-800 font-extrabold text-lg px-4 py-2 rounded-xl text-right border border-emerald-200">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}