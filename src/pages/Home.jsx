import { FaTooth, FaClock, FaStar, FaCheckCircle, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background with subtle zoom effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-medium mb-6 tracking-wider animate-fade-in">
            نخبة معامل الأسنان في المنطقة
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.2]">
            مخبر <span className="text-gold">الروضة</span> لطب الأسنان
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            حيث تلتقي التكنولوجيا بالفن. نقدم تركيبات سنية فائقة الدقة تمنح مرضاكم الابتسامة التي يستحقونها.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/doctors"
              className="bg-gold hover:bg-yellow-500 text-slate-950 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-gold/20 transition-all hover:-translate-y-1"
            >
              إرسال حالة جديدة
            </Link>
            <Link
              to="/contact"
              className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <div className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-slate-100">
          {[
            { label: "دقة متناهية", icon: <FaCheckCircle className="text-gold" /> },
            { label: "تسليم سريع", icon: <FaClock className="text-gold" /> },
            { label: "خبرة فنية", icon: <FaStar className="text-gold" /> },
            { label: "خامات عالمية", icon: <FaTooth className="text-gold" /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full -z-10" />
            <h2 className="text-4xl font-bold text-slate-900 mb-8 relative">
              من نحن
              <span className="block w-12 h-1 bg-gold mt-2" />
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              مخبر الروضة ليس مجرد معامل تصنيع، بل هو شريك تقني للطبيب. نجمع بين أحدث أنظمة الـ **CAD/CAM** وبين اللمسة الفنية اليدوية لضمان تطابق حيوي وجمالي تام.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-gold text-2xl mb-1">10+</h4>
                <p className="text-sm text-slate-500">سنوات من التميز</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-gold text-2xl mb-1">2000+</h4>
                <p className="text-sm text-slate-500">طقم أسنان ناجح</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="text-2xl font-bold mb-6 text-gold">رسالتنا المهنية</h3>
            <p className="text-slate-300 leading-loose text-lg italic">
              "نلتزم بتمكين أطباء الأسنان من تقديم أفضل رعاية ممكنة لمرضاهم من خلال توفير تركيبات تتجاوز المعايير العالمية في الدقة والجمال."
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">خدماتنا المتخصصة</h2>
            <p className="text-slate-500 max-w-xl mx-auto">حلول رقمية وتقليدية متكاملة لكافة أنواع التركيبات السنية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "تيجان الزيركون", desc: "صلابة استثنائية مع شفافية تحاكي الأسنان الطبيعية تماماً." },
              { title: "جسور زيركون", desc: "تصميم هندسي دقيق لتعويض الأسنان المفقودة بأمان تام." },
              { title: "فينير خزفي", desc: "قشور تجميلية فائقة الرقة لابتسامة هوليود مثالية." },
            ].map((service, index) => (
              <div key={index} className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-gold transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <FaTooth className="text-3xl text-gold group-hover:text-slate-950" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                   اكتشف المزيد <FaChevronLeft className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="py-24 px-6">
        <h2 className="text-center text-4xl font-bold mb-16">رحلة العمل معنا</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['استلام الحالة', 'المراجعة الرقمية', 'التصنيع الآلي', 'اللمسات الفنية', 'التسليم النهائي'].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 bg-slate-900 text-gold rounded-full flex items-center justify-center mx-auto mb-4 font-bold border-4 border-white shadow-lg relative z-10">
                  {i + 1}
                </div>
                {i < 4 && <div className="hidden md:block absolute top-6 left-[-50%] w-full h-[2px] bg-slate-200 -z-0" />}
                <p className="font-bold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* ================= CASE GALLERY (NEW) ================= */}
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">معرض الأعمال</h2>
            <p className="text-slate-400">نماذج واقعية لحالات تم تنفيذها داخل مخبرنا</p>
          </div>
          <Link to="/gallery" className="hidden md:block text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
            عرض المعرض الكامل
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              label: "ابتسامة كاملة - إيماكس", 
              img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800" 
            },
            { 
              label: "تيجان زيركون خلفية", 
              img: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=800" 
            },
            { 
              label: "جسور تعويضية دقيقة", 
              img: "https://images.unsplash.com/photo-1593059025398-0f5ce0174242?q=80&w=800" 
            }
          ].map((work, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img 
                src={work.img} 
                alt={work.label} 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold text-gold">{work.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ================= DIGITAL EXCELLENCE (NEW) ================= */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551606713-23363300589a?q=80&w=800" 
                  alt="CAD CAM Technology" 
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800" 
                  alt="3D Dental Printing" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-gold font-bold text-xl">CAD/CAM</p>
                <p className="text-sm text-slate-400">نظام التصميم الرقمي المتكامل</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                الدقة الرقمية في خدمة <span className="text-gold">الفن اليدوي</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                نستثمر في أحدث التقنيات العالمية لنضمن لك انطباقاً ميكرونياً (Micron-level fit). من المسح الضوئي إلى الخراطة الرقمية، نوفر دقة تفوق الطرق التقليدية بمراحل.
              </p>
              <ul className="space-y-4">
                {[
                  "تصميم رقمي ثلاثي الأبعاد بالكامل",
                  "خراطة الزيركون بأحدث الأجهزة الألمانية",
                  "طباعة النماذج ثلاثية الأبعاد بدقة عالية",
                  "مطابقة الألوان عبر أنظمة التصوير الرقمي"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                    <span className="w-6 h-6 bg-gold/20 text-gold rounded-full flex items-center justify-center text-xs">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-slate-950 py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">هل أنت جاهز لرفع مستوى عيادتك؟</h2>
          <p className="text-slate-400 mb-10 text-lg">انضم إلى قائمة شركائنا من نخبة الأطباء واحصل على نتائج تضمن رضا مرضاك.</p>
          <Link
            to="/doctors"
            className="inline-block bg-gold text-slate-950 px-12 py-4 rounded-full font-extrabold text-xl hover:scale-105 transition-transform"
          >
            ابدأ التعاون الآن
          </Link>
        </div>
      </section>
    </div>
  );
}