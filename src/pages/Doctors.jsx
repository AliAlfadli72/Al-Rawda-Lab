import { useState } from "react";
import { FaUpload, FaWhatsapp, FaTooth, FaClipboardList, FaFileInvoice, FaCheckCircle } from "react-icons/fa";

export default function Doctors() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 500);
  };

  return (
    <div className="font-sans antialiased bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            بوابة الأطباء الرقمية
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            إرسال <span className="text-gold">وصفة مخبرية</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
            نسهّل عليك العملية الإدارية. أدخل تفاصيل الحالة هنا وسيقوم فريقنا التقني بمراجعتها فوراً.
          </p>
        </div>
      </section>

      {/* ================= MAIN FORM SECTION ================= */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          
          {!submitted ? (
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-primary/10 overflow-hidden border border-primary/10">
              <div className="bg-primary p-8 text-white flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-white shadow-lg shadow-gold/20">
                    <FaFileInvoice size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">نموذج الحالة الرقمي</h2>
                    <p className="text-white/50 text-xs">يرجى ملء الحقول بدقة</p>
                  </div>
                </div>
                <span className="text-xs text-white/30 font-mono hidden md:block">REF: ALR-2026</span>
              </div>

              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                {/* section: Doctor Info */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">اسم الطبيب / العيادة</label>
                    <input type="text" required placeholder="د. عامر الخطيب" className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">رقم التواصل</label>
                    <input type="tel" required placeholder="09xx xxx xxx" className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all" dir="ltr" />
                  </div>
                </div>

                <hr className="mb-12 border-primary/10" />

                {/* section: Case Details */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">نوع العمل</label>
                    <select className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all appearance-none">
                      <option>اختر النوع...</option>
                      <option>زيركون (Full Contour)</option>
                      <option>إيماكس (E-max)</option>
                      <option>فينير تجميلي</option>
                      <option>زرع سني</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">عدد الأسنان</label>
                    <input type="number" placeholder="1" className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">اللون (Shade)</label>
                    <input type="text" placeholder="A1, B1, BL2..." className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all" />
                  </div>
                </div>

                {/* File Upload Area */}
                <div className="mb-12">
                  <label className="text-sm font-bold text-primary mb-4 block">الملفات الرقمية (STL / الصور)</label>
                  <div className="border-2 border-dashed border-primary/20 bg-primary/5 p-12 rounded-3xl text-center hover:border-gold hover:bg-gold/5 transition-all group cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <FaUpload className="text-gold text-2xl" />
                    </div>
                    <p className="font-bold text-primary">اسحب الملفات هنا أو اضغط للرفع</p>
                    <p className="text-xs text-primary/50 mt-2">ندعم ملفات STL, OBJ, JPG, PDF (بحد أقصى 50MB)</p>
                  </div>
                </div>

                <div className="space-y-2 mb-12">
                  <label className="text-sm font-bold text-primary">ملاحظات فنية خاصة</label>
                  <textarea rows="4" placeholder="مثلاً: تحديد شكل الحواف، تفاصيل التدرج اللوني..." className="w-full bg-primary/5 border-2 border-transparent p-4 rounded-xl focus:bg-white focus:border-gold outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-gold py-5 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3">
                  إرسال الحالة للمخبر <FaTooth />
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-[2.5rem] p-16 text-center shadow-2xl border border-primary/10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <FaCheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-black text-primary mb-4">تم استلام الوصفة بنجاح!</h2>
              <p className="text-primary/50 text-lg mb-10 max-w-md mx-auto">
                لقد تم إدراج الحالة في نظامنا الرقمي. سيقوم المشرف الفني بمراجعتها والتواصل معك خلال الدقائق القادمة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/963933788363" className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                  <FaWhatsapp size={20} /> متابعة عبر واتساب
                </a>
                <button onClick={() => setSubmitted(false)} className="bg-primary/10 text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary/20 transition-all">
                  إرسال حالة أخرى
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= TECHNICAL REQUIREMENTS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-gold rounded-full"></div>
            <h2 className="text-3xl font-bold text-primary">دليل الجودة للأطباء</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "التصوير الرقمي", icon: <FaUpload />, desc: "يفضل إرسال صور فوتوغرافية واضحة للأسنان المجاورة لضمان مطابقة اللون." },
              { title: "ملفات STL", icon: <FaClipboardList />, desc: "نقبل ملفات المسح الضوئي من جميع أجهزة الـ Intraoral Scanners العالمية." },
              { title: "تحديد اللون", icon: <FaTooth />, desc: "يرجى استخدام دليل ألوان Vita 3D Master لضمان أعلى دقة في النتائج." },
              { title: "مواعيد التسليم", icon: <FaFileInvoice />, desc: "يتم تسليم الحالات الروتينية خلال 3-5 أيام عمل من تاريخ استلام الطبعة." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-primary/5 border border-primary/10 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-gold text-2xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-primary/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}