import { FaTooth, FaClock, FaStar, FaCheckCircle, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans antialiased text-primary bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background with subtle zoom effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/cove.webp')",
          }}
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-medium mb-6 tracking-wider animate-fade-in">
            نخبة معامل الأسنان في المنطقة
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.2]">
            مخبر <span className="text-gold">الروضة</span> لطب الأسنان
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            حيث تلتقي التكنولوجيا بالفن. نقدم تركيبات سنية فائقة الدقة تمنح مرضاكم الابتسامة التي يستحقونها.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/doctors"
              className="bg-gold hover:bg-[#b8963f] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-gold/20 transition-all hover:-translate-y-1"
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
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-primary/10">
          {[
            { label: "دقة متناهية", icon: <FaCheckCircle className="text-gold" /> },
            { label: "تسليم سريع", icon: <FaClock className="text-gold" /> },
            { label: "خبرة فنية", icon: <FaStar className="text-gold" /> },
            { label: "خامات عالمية", icon: <FaTooth className="text-gold" /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full -z-10" />
            <h2 className="text-4xl font-bold text-primary mb-8 relative">
              من نحن
              <span className="block w-12 h-1 bg-gold mt-2" />
            </h2>
            <p className="text-lg text-primary/70 mb-6 leading-relaxed">
              مخبر الروضة ليس مجرد معامل تصنيع، بل هو شريك تقني للطبيب. نجمع بين أحدث أنظمة الـ **CAD/CAM** وبين اللمسة الفنية اليدوية لضمان تطابق حيوي وجمالي تام.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-bold text-gold text-2xl mb-1">10+</h4>
                <p className="text-sm text-primary/60">سنوات من التميز</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-bold text-gold text-2xl mb-1">2000+</h4>
                <p className="text-sm text-primary/60">طقم أسنان ناجح</p>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="text-2xl font-bold mb-6 text-gold">رسالتنا المهنية</h3>
            <p className="text-white/70 leading-loose text-lg italic">
              "نلتزم بتمكين أطباء الأسنان من تقديم أفضل رعاية ممكنة لمرضاهم من خلال توفير تركيبات تتجاوز المعايير العالمية في الدقة والجمال."
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-primary/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">خدماتنا المتخصصة</h2>
            <p className="text-primary/60 max-w-xl mx-auto">حلول رقمية وتقليدية متكاملة لكافة أنواع التركيبات السنية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "تيجان الزيركون", desc: "صلابة استثنائية مع شفافية تحاكي الأسنان الطبيعية تماماً." },
              { title: "جسور زيركون", desc: "تصميم هندسي دقيق لتعويض الأسنان المفقودة بأمان تام." },
              { title: "فينير خزفي", desc: "قشور تجميلية فائقة الرقة لابتسامة هوليود مثالية." },
            ].map((service, index) => (
              <div key={index} className="group bg-white p-10 rounded-2xl border border-primary/10 hover:border-gold transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <FaTooth className="text-3xl text-gold group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-primary/60 leading-relaxed mb-6">{service.desc}</p>
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
        <h2 className="text-center text-4xl font-bold mb-16 text-primary">رحلة العمل معنا</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['استلام الحالة', 'المراجعة الرقمية', 'التصنيع الآلي', 'اللمسات الفنية', 'التسليم النهائي'].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 bg-primary text-gold rounded-full flex items-center justify-center mx-auto mb-4 font-bold border-4 border-white shadow-lg relative z-10">
                  {i + 1}
                </div>
                {i < 4 && <div className="hidden md:block absolute top-6 left-[-50%] w-full h-[2px] bg-primary/20 -z-0" />}
                <p className="font-bold text-primary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE GALLERY ================= */}
      <section className="py-24 bg-primary text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">معرض الأعمال</h2>
              <p className="text-white/50">نماذج واقعية لحالات تم تنفيذها داخل مخبرنا</p>
            </div>
            <Link to="/gallery" className="hidden md:block text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
              عرض المعرض الكامل
            </Link>
          </div>

          {/* 3 Equal Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 - Zircon */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fm=webp&q=55&w=600"
                alt="تيجان زيركون"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 p-6 w-full">
                <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-3">زيركون</span>
                <p className="font-bold text-lg text-white">تيجان زيركون كاملة</p>
                <p className="text-white/60 text-sm mt-1">انطباق دقيق وجمال طبيعي</p>
              </div>
            </div>

            {/* Card 2 - Veneer */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?fm=webp&q=55&w=600"
                alt="فينير خزفي"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 p-6 w-full">
                <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-3">فينير</span>
                <p className="font-bold text-lg text-white">عدسات الفينير التجميلية</p>
                <p className="text-white/60 text-sm mt-1">ابتسامة هوليود مثالية</p>
              </div>
            </div>

            {/* Card 3 - Bridges */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?fm=webp&q=55&w=600"
                alt="جسور تعويضية"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 p-6 w-full">
                <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-3">جسور</span>
                <p className="font-bold text-lg text-white">جسور خزفية وزيركون</p>
                <p className="text-white/60 text-sm mt-1">تعويض متكامل ودقيق</p>
              </div>
            </div>

          </div>

          {/* Mobile: View full gallery link */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="text-gold border-b border-gold pb-1">
              عرض المعرض الكامل
            </Link>
          </div>
        </div>
      </section>



      {/* ================= DIGITAL EXCELLENCE (REDESIGNED) ================= */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #00281A 0%, #003d29 50%, #001a11 100%)' }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #a0843c 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #a0843c 0%, transparent 70%)', filter: 'blur(80px)' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-5 rounded-full text-sm font-semibold mb-5 tracking-widest" style={{ background: 'rgba(160,132,60,0.15)', border: '1px solid rgba(160,132,60,0.4)', color: '#a0843c' }}>
              ⚙ التقنية والدقة
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-snug">
              الدقة الرقمية في خدمة&nbsp;
              <span style={{ color: '#a0843c' }}>الفن اليدوي</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              من المسح الضوئي إلى التسليم النهائي — كل خطوة مدعومة بأحدث التقنيات وأكثرها دقةً في العالم.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-3xl overflow-hidden h-56 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fm=webp&q=65&w=800"
                    alt="CAD CAM Technology"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy" decoding="async"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-44 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?fm=webp&q=65&w=500"
                    alt="3D Dental Printing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy" decoding="async"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-44 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?fm=webp&q=65&w=500"
                    alt="Dental Lab Work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy" decoding="async"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 text-white p-5 rounded-2xl shadow-2xl hidden md:flex items-center gap-4" style={{ background: 'linear-gradient(135deg, #a0843c, #c9a94e)' }}>
                <div className="text-3xl font-black text-white leading-none">10<span className="text-lg">+</span></div>
                <div>
                  <p className="text-xs text-white/70 font-medium">سنوات من</p>
                  <p className="text-sm font-bold text-white">التميز الرقمي</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Features */}
            <div className="space-y-5">
              {[
                { icon: '🖥', title: 'تصميم رقمي ثلاثي الأبعاد', desc: 'نمذجة كاملة بنظام CAD/CAM لضمان انطباق ميكروني مثالي.' },
                { icon: '⚙', title: 'خراطة زيركون ألمانية', desc: 'أحدث ماكينات الخراطة الدقيقة لأعلى جودة ممكنة.' },
                { icon: '🖨', title: 'طباعة ثلاثية الأبعاد', desc: 'نماذج بدقة عالية تُقلّص وقت التنفيذ وتُعظّم الجودة.' },
                { icon: '🎨', title: 'مطابقة دقيقة للألوان', desc: 'أنظمة تصوير رقمي لمطابقة لون الأسنان الطبيعية.' },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(160,132,60,0.12)'; e.currentTarget.style.borderColor = 'rgba(160,132,60,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300" style={{ background: 'rgba(160,132,60,0.2)' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-base">{feat.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">هل أنت جاهز لرفع مستوى عيادتك؟</h2>
          <p className="text-white/60 mb-10 text-lg">انضم إلى قائمة شركائنا من نخبة الأطباء واحصل على نتائج تضمن رضا مرضاك.</p>
          <Link
            to="/doctors"
            className="inline-block bg-gold text-white px-12 py-4 rounded-full font-extrabold text-xl hover:bg-[#b8963f] hover:scale-105 transition-all"
          >
            ابدأ التعاون الآن
          </Link>
        </div>
      </section>
    </div>
  );
}