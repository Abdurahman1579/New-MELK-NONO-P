'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useLanguage } from '../context/LanguageContext';

export default function FinancialReport({ onClose }) {
  const { lang } = useLanguage();
  const [pledges, setPledges] = useState([]);
  const [loading, setLoading] = useState(true);

  const isRtl = lang === 'ar';

  const labels = {
    title: {
      om: 'Gabaasa Maallaqaa fi Waadaa (Financial Report)',
      am: 'የገንዘብ እና የቃል ኪዳን ሪፖርት',
      en: 'Financial & Pledge Report',
      ar: 'تقرير المالية والتعهدات'
    },
    totalPledged: {
      om: 'Itti Ida\'ama Waadaa',
      am: 'ጠቅላላ የተገባ ቃል',
      en: 'Total Pledged',
      ar: 'إجمالي التعهدات'
    },
    totalPaid: {
      om: 'Itti Ida\'ama Kaffalame',
      am: 'ጠቅላላ የተከፈለ',
      en: 'Total Paid',
      ar: 'إجمالي المدفوع'
    },
    name: {
      om: 'Maqaa',
      am: 'ስም',
      en: 'Name',
      ar: 'الاسم'
    },
    category: {
      om: 'Gosa',
      am: 'ዓይነት',
      en: 'Category',
      ar: 'الفئة'
    },
    pledged: {
      om: 'Waadaa (ETB)',
      am: 'ቃል የተገባ',
      en: 'Pledged',
      ar: 'التعهد'
    },
    status: {
      om: 'Haala Kaffaltii',
      am: 'የክፍያ ሁኔታ',
      en: 'Status',
      ar: 'الحالة'
    },
    close: {
      om: 'Cufi',
      am: 'ዝጋ',
      en: 'Close',
      ar: 'إغلاق'
    },
    noData: {
      om: 'Galmeen tokkollee hin argamne.',
      am: 'ምንም መረጃ አልተገኘም።',
      en: 'No records found.',
      ar: 'لم يتم العثور على سجلات.'
    },
    loadingText: {
      om: 'Fe\'amaa jira...',
      am: 'በመጫን ላይ...',
      en: 'Loading...',
      ar: 'جاري التحميل...'
    }
  };

  async function fetchPledges() {
    setLoading(true);
    const { data, error } = await supabase
      .from('pledges')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching pledges:', error);
    } else {
      setPledges(data || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPledges();
  }, []);

  // Calculate totals safely
  const totalPledged = pledges.reduce((sum, p) => sum + (Number(p.pledged_amount) || 0), 0);
  const totalPaid = pledges.reduce((sum, p) => sum + (Number(p.paid_amount) || 0), 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div 
        className="bg-white text-slate-900 rounded-2xl p-6 w-full max-w-4xl shadow-2xl max-h-[90vh] flex flex-col border border-emerald-100"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h3 className="text-xl font-bold text-emerald-900">{labels.title[lang]}</h3>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 font-bold text-2xl transition"
          >
            &times;
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center shadow-sm">
            <span className="text-sm font-semibold text-emerald-800">{labels.totalPledged[lang]}</span>
            <p className="text-2xl font-black text-emerald-900 mt-1">{totalPledged.toLocaleString()} ETB</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-center shadow-sm">
            <span className="text-sm font-semibold text-amber-800">{labels.totalPaid[lang]}</span>
            <p className="text-2xl font-black text-amber-900 mt-1">{totalPaid.toLocaleString()} ETB</p>
          </div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-y-auto border border-slate-200 rounded-xl">
          {loading ? (
            <div className="text-center py-12 font-semibold text-slate-500">{labels.loadingText[lang]}</div>
          ) : pledges.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-medium">{labels.noData[lang]}</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-slate-700 sticky top-0 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 text-start">{labels.name[lang]}</th>
                  <th className="p-3 text-start">{labels.category[lang]}</th>
                  <th className="p-3 text-end">{labels.pledged[lang]}</th>
                  <th className="p-3 text-center">{labels.status[lang]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pledges.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-semibold text-slate-800">{p.full_name}</td>
                    <td className="p-3 text-slate-600">{p.donor_category}</td>
                    <td className="p-3 text-end font-bold text-emerald-700">
                      {Number(p.pledged_amount || 0).toLocaleString()} ETB
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold inline-block ${
                        p.payment_status === 'Paid' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}>
                        {p.payment_status || 'Pledged'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg transition"
          >
            {labels.close[lang]}
          </button>
        </div>

      </div>
    </div>
  );
}