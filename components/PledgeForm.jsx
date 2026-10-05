'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useLanguage } from '../context/LanguageContext';

export default function PledgeForm({ onClose, onSuccess }) {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    donor_category: 'General Community',
    pledged_amount: '',
  });

  const labels = {
    title: {
      om: 'Unka Waadaa Maallaqaa (Pledge Form)',
      am: 'የቃል ኪዳን መመዝገቢያ ቅጽ',
      en: 'Pledge Registration Form',
      ar: 'نموذج تسجيل التعهد'
    },
    fullName: {
      om: 'Maqaa Guutuu',
      am: 'ሙሉ ስም',
      en: 'Full Name',
      ar: 'الاسم الكامل'
    },
    phone: {
      om: 'Lakkoofsa Bilbilaa',
      am: 'ስልክ ቁጥር',
      en: 'Phone Number',
      ar: 'رقم الهاتف'
    },
    email: {
      om: 'Imeelii (Odoo Barbaachisee)',
      am: 'ኢሜይል (አማራጭ)',
      en: 'Email (Optional)',
      ar: 'البريد الإلكتروني (اختياري)'
    },
    category: {
      om: 'Gosa Arjoomaa',
      am: 'የለጋሽ ዓይነት',
      en: 'Donor Category',
      ar: 'فئة المتبرع'
    },
    amount: {
      om: 'Garaa Maallaqa Waadaa (ETB)',
      am: 'የቃል ኪዳን መጠን (በብር)',
      en: 'Pledged Amount (ETB)',
      ar: 'مبلغ التعهد (بالብር)'
    },
    submit: {
      om: 'Galmeessi',
      am: 'መዝግብ',
      en: 'Submit Pledge',
      ar: 'إرسال التعهد'
    },
    close: {
      om: 'Cufi',
      am: 'ዝጋ',
      en: 'Close',
      ar: 'إغلاق'
    }
  };

  const categories = [
    { value: 'Big Investor', label: { om: 'Abbaa Qabeenyaa Gurguddaa', am: 'ከፍተኛ ባለሀብት', en: 'Major Investor', ar: 'مستثمر كبير' } },
    { value: 'Mid Investor', label: { om: 'Abbaa Qabeenyaa Giddu-galeessaa', am: 'መካከለኛ ባለሀብት', en: 'Mid Investor', ar: 'مستثمر متوسط' } },
    { value: 'Masjid', label: { om: 'Masgiida / Gamtaa', am: 'መስጊድ / ማህበር', en: 'Masjid / Organization', ar: 'مسجد / منظمة' } },
    { value: 'General Community', label: { om: 'Hawaasa Waliigalaa', am: 'பொදු ህብረተሰብ', en: 'General Public', ar: 'عامة المجتمع' } }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('pledges').insert([
      {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        email: formData.email,
        donor_category: formData.donor_category,
        pledged_amount: parseFloat(formData.pledged_amount),
        paid_amount: 0.00,
        payment_status: 'Pledged'
      }
    ]);

    setLoading(false);

    if (error) {
      alert('Dogoggorri uumameera: ' + error.message);
    } else {
      alert(lang === 'om' ? 'Waadaan keessan milkaa’inaan galmaa’eera. Jazaakallaahu Khayran!' : 'ቃል ኪዳንዎ በተሳካ ሁኔታ ተመዝግቧል። ጃዛከላሁ ኸይረን!');
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-white text-slate-900 rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-emerald-100">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h3 className="text-xl font-bold text-emerald-900">{labels.title[lang]}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold text-xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{labels.fullName[lang]}</label>
            <input
              type="text"
              required
              className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{labels.phone[lang]}</label>
              <input
                type="tel"
                required
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{labels.email[lang]}</label>
              <input
                type="email"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{labels.category[lang]}</label>
            <select
              className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              value={formData.donor_category}
              onChange={(e) => setFormData({ ...formData, donor_category: e.target.value })}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label[lang] || cat.label.en}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{labels.amount[lang]}</label>
            <input
              type="number"
              required
              min="1"
              step="any"
              className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none text-lg font-semibold"
              value={formData.pledged_amount}
              onChange={(e) => setFormData({ ...formData, pledged_amount: e.target.value })}
            />
          </div>

          <div className="flex space-x-3 rtl:space-x-reverse pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg shadow transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : labels.submit[lang]}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition"
            >
              {labels.close[lang]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}