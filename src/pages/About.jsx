import { FaCheckCircle, FaEye, FaBullseye, FaAward, FaFlask, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="font-sans antialiased bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
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
              <p className="max-w-2xl text-slate-300 text-lg md:text-xl leading-relaxed">
                مخبر الروضة ليس مجرد مركز تصنيع، بل هو مختبر فني يجمع بين 
                أحدث تقنيات التصميم العالمي وبين اللمسة الإبداعية اليدوية.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
               <div className="relative">
                  <div className="w-64 h-64 border-2 border-gold/30 rounded-full absolute -top-4 -right-4 animate-pulse"></div>
                  <div className="w-64 h-64 bg-slate-800 rounded-full flex items-center justify-center relative overflow-hidden">
                    <FaAward className="text-gold text-8xl opacity-20 absolute" />
                    <span className="text-gold font-bold text-center px-4">أكثر من 10 سنوات من التميز الفني</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY & VISION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Composition */}
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" 
                  alt="Laboratory Work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[280px] border border-slate-50">
                <div className="flex items-center gap-4 mb-3 text-gold">
                  <FaFlask className="text-3xl" />
                  <span className="font-bold text-slate-900">مواد معتمدة</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  نستخدم حصرياً خامات الزيركون والإيماكس من كبرى الشركات العالمية لضمان ديمومة النتيجة.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">الدقة هي هويتنا</h2>
                <p className="text-slate-600 text-lg leading-loose mb-4">
                  تأسس مخبر الروضة ليكون الجسر الذي يربط بين تشخيص الطبيب ورضا المريض. نحن نؤمن أن كل حالة هي "لوحة فنية" فريدة، وليست مجرد رقم تسلسلي.
                </p>
                <p className="text-slate-600 text-lg leading-loose">
                  فريقنا يضم نخبة من الفنيين المتخصصين الذين يتابعون كل تفصيل، من دقة الحواف (Marginal Fit) إلى تدرج الألوان الطبيعي، لضمان تسليم عمل لا يحتاج إلى تعديل.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gold/5 border-r-4 border-gold p-8 rounded-l-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FaEye className="text-gold" /> رؤيتنا المستقبلية
                </h3>
                <p className="text-slate-700 leading-relaxed italic">
                  "أن نقود التحول الرقمي في صناعة الأسنان محلياً، مع الحفاظ على الروح الفنية والاهتمام الشخصي بكل طبيب نتعامل معه."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES (GRID) ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">قيمنا الجوهرية</h2>
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
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group text-center">
                <div className="w-16 h-16 bg-slate-900 text-gold rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            انضم إلى قائمة شركائنا النجاح
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
            نحن هنا لنسهل عملك ونضمن رضا مرضاك. هل أنت جاهز لإرسال حالتك الأولى؟
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/doctors"
              className="bg-gold text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all hover:-translate-y-1"
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