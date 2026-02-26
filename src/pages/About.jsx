import { FaCheckCircle, FaEye, FaBullseye, FaAward, FaFlask, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="font-sans antialiased bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-12 transform origin-right"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-right">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <span className="inline-block py-1 px-4 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-bold mb-4">
                قصتنا وهويتنا
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                نحن نعيد تعريف <br />
                <span className="text-gold">الابتسامة الرقمية</span>
              </h1>
              <p className="max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
                مخبر الروضة ليس مجرد مركز تصنيع، بل هو مختبر فني يجمع بين 
                أحدث تقنيات التصميم العالمي وبين اللمسة الإبداعية اليدوية.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
               <div className="relative">
                  <div className="w-64 h-64 border-2 border-gold/30 rounded-full absolute -top-4 -right-4 animate-pulse"></div>
                  <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center relative overflow-hidden">
                    <FaAward className="text-gold text-8xl opacity-20 absolute" />
                    <span className="text-gold font-bold text-center px-4">أكثر من 10 سنوات من التميز الفني</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY & VISION ================= */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #00281A 0%, #001a11 60%, #002a1c 100%)' }}>
        {/* Glow blobs */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(160,132,60,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(160,132,60,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT — Image Stack */}
            <div className="relative order-2 lg:order-1">
              {/* Main photo */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
                <img
                  src="/about.webp"
                  alt="مخبر الروضة"
                  className="w-full h-full object-cover"
                  loading="lazy" decoding="async"
                />
              </div>
              {/* Stats pill — bottom right */}
              <div className="absolute -bottom-6 -right-4 hidden md:flex flex-col gap-3">
                {[
                  { num: '10+', label: 'سنوات خبرة' },
                  { num: '2000+', label: 'حالة ناجحة' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl" style={{ background: 'linear-gradient(135deg, #a0843c, #c9a94e)' }}>
                    <span className="text-2xl font-black text-white">{s.num}</span>
                    <span className="text-white/80 text-sm font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              {/* Materials card — bottom left */}
              <div className="absolute -bottom-6 -left-4 hidden md:block max-w-[220px] p-5 rounded-2xl shadow-xl" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <FaFlask style={{ color: '#a0843c' }} className="text-xl" />
                  <span className="font-bold text-white text-sm">مواد معتمدة</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  زيركون وإيماكس من كبرى الشركات العالمية لضمان ديمومة النتيجة.
                </p>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Badge */}
              <span className="inline-block py-1.5 px-5 rounded-full text-sm font-semibold tracking-widest" style={{ background: 'rgba(160,132,60,0.15)', border: '1px solid rgba(160,132,60,0.4)', color: '#a0843c' }}>
                🏆 قصتنا
              </span>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
                الدقة&nbsp;
                <span style={{ color: '#a0843c' }}>هي هويتنا</span>
              </h2>

              {/* Body */}
              <p className="text-white/55 text-lg leading-loose">
                تأسس مخبر الروضة ليكون الجسر الذي يربط بين تشخيص الطبيب ورضا المريض. نؤمن أن كل حالة هي <span className="text-white/80 font-semibold">"لوحة فنية"</span> فريدة، وليست مجرد رقم تسلسلي.
              </p>
              <p className="text-white/55 text-lg leading-loose">
                فريقنا من نخبة الفنيين المتخصصين يتابعون كل تفصيل — من دقة الحواف <span className="text-white/80 font-semibold">(Marginal Fit)</span> إلى تدرج الألوان الطبيعي — لضمان تسليم عمل لا يحتاج تعديلاً.
              </p>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'linear-gradient(to left, transparent, rgba(160,132,60,0.4), transparent)' }} />

              {/* Vision quote */}
              <div className="relative p-7 rounded-2xl overflow-hidden" style={{ background: 'rgba(160,132,60,0.08)', border: '1px solid rgba(160,132,60,0.25)' }}>
                <div className="absolute top-4 right-6 text-6xl font-serif leading-none select-none" style={{ color: 'rgba(160,132,60,0.2)' }}>"</div>
                <div className="flex items-center gap-3 mb-4">
                  <FaEye style={{ color: '#a0843c' }} className="text-lg" />
                  <h3 className="font-bold text-white text-base">رؤيتنا المستقبلية</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-base italic">
                  أن نقود التحول الرقمي في صناعة الأسنان محلياً، مع الحفاظ على الروح الفنية والاهتمام الشخصي بكل طبيب نتعامل معه.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES (GRID) ================= */}
      <section className="py-24 bg-primary/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">قيمنا الجوهرية</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBullseye />,
                title: "التركيز على التفاصيل",
                desc: "في طب الأسنان، الميكرومتر يصنع الفرق. نحن مهووسون بالدقة في كل قطعة ننتجها."
              },
              {
                icon: <FaUsers />,
                title: "الشراكة الحقيقية",
                desc: "لا نعتبر أنفسنا مورّداً فقط، بل شريكاً فنياً للطبيب يساهم في نجاح خطته العلاجية."
              },
              {
                icon: <FaCheckCircle />,
                title: "الجودة بلا مساومة",
                desc: "نطبق معايير رقابة صارمة في كل مرحلة من مراحل الإنتاج قبل خروج الحالة من المخبر."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10 hover:shadow-xl transition-shadow group text-center">
                <div className="w-16 h-16 bg-primary text-gold rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-primary/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            انضم إلى قائمة شركائنا النجاح
          </h2>
          <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">
            نحن هنا لنسهل عملك ونضمن رضا مرضاك. هل أنت جاهز لإرسال حالتك الأولى؟
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/doctors"
              className="bg-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#b8963f] transition-all hover:-translate-y-1"
            >
              إرسال حالة الآن
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}