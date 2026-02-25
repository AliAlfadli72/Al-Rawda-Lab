import { FaPhoneAlt, FaMobileAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="font-sans antialiased bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center md:text-right">
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">نحن هنا لخدمتكم</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">تواصل <span className="text-gold">مباشر</span></h1>
            <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
              سواء كنت طبيباً تود بدء تعاون جديد أو لديك استفسار فني حول حالة معينة، فريق مخبر الروضة جاهز للرد الفوري.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-24 px-6 relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Sidebar: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
                <h3 className="text-2xl font-bold mb-8">معلومات الاتصال</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                      <FaMobileAlt size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">الموبايل (الطلب السريع)</p>
                      <p className="text-lg font-bold" dir="ltr">0933 788 363</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">الهاتف الأرضي</p>
                      <p className="text-lg font-bold" dir="ltr">011 333 7738</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">الموقع</p>
                      <p className="text-lg font-bold">دمشق – الروضة</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 text-gold mb-4">
                    <FaClock />
                    <span className="font-bold">ساعات العمل</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    السبت — الخميس<br />
                    9:00 صباحاً — 8:00 مساءً
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp Card */}
              <a 
                href="https://wa.me/963933788363" 
                className="flex items-center justify-between p-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl transition-all shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <FaWhatsapp size={32} />
                  <div>
                    <p className="font-bold text-lg">واتساب سريع</p>
                    <p className="text-xs opacity-90">استشارة فنية فورية</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-[-4px] transition-transform">
                  ←
                </div>
              </a>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-14 rounded-[2rem] shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">أرسل استفسارك</h2>
              <p className="text-slate-500 mb-10">سنقوم بالرد عليك عبر البريد الإلكتروني أو الهاتف خلال 24 ساعة كحد أقصى.</p>
              
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="د. محمد الأحمد"
                    className="w-full bg-slate-50 border-transparent border-2 p-4 rounded-xl focus:bg-white focus:border-gold focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">رقم التواصل</label>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full bg-slate-50 border-transparent border-2 p-4 rounded-xl focus:bg-white focus:border-gold focus:outline-none transition-all"
                    dir="ltr"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="doctor@example.com"
                    className="w-full bg-slate-50 border-transparent border-2 p-4 rounded-xl focus:bg-white focus:border-gold focus:outline-none transition-all"
                    dir="ltr"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">نص الرسالة</label>
                  <textarea
                    rows="5"
                    placeholder="كيف يمكننا مساعدتك؟"
                    className="w-full bg-slate-50 border-transparent border-2 p-4 rounded-xl focus:bg-white focus:border-gold focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="md:col-span-2 bg-slate-900 text-gold py-5 rounded-xl font-extrabold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  إرسال الرسالة الآن
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe
            title="Al Rawda Lab Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.702!2d36.28!3d33.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzM2LjAiTiAzNsKwMTYnNDguMCJF!5e0!3m2!1sen!2ssy!4v1620000000000!5m2!1sen!2ssy"
            className="w-full h-[500px] grayscale contrast-125"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}