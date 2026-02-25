import { FaTooth, FaLayerGroup, FaSmile, FaCogs, FaCheck, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "تيجان الزيركون (Full Zirconia)",
      icon: <FaTooth />,
      desc: "تيجان زيركون بجودة عالية وتشطيب طبيعي، مع خيارات ألوان متعددة لتطابق لون الأسنان ودقة في الملاءمة لتقليل التعديلات داخل العيادة.",
      features: ["صلابة عالية", "توافق حيوي", "شفافية طبيعية"]
    },
    {
      title: "جسور الزيركون (Long Span Bridges)",
      icon: <FaLayerGroup />,
      desc: "جسور قوية مناسبة للحالات الثابتة، تصميم يحافظ على المظهر الطبيعي مع التزام بمقاسات دقيقة لتسهيل التركيب.",
      features: ["دقة CAD/CAM", "مقاومة للكسر", "توزيع قوى مثالي"]
    },
    {
      title: "فينير خزفي (Porcelain Veneers)",
      icon: <FaSmile />,
      desc: "قشور تجميلية تمنح ابتسامة متناسقة، دعم تصميم الابتسامة للطبيب ونتائج جمالية بلمسة طبيعية تحاكي ميناء السن.",
      features: ["سماكة قليلة جداً", "ثبات اللون", "ابتسامة هوليود"]
    },
    {
      title: "تركيبات E-max والمتحركة",
      icon: <FaCogs />,
      desc: "حلول خزفية للحالات التجميلية مع تشطيب عالي واهتمام بتدرجات اللون، بالإضافة إلى التركيبات المتحركة بإتقان في الإطباق والراحة.",
      features: ["جمالية فائقة", "إطباق وظيفي", "سهولة الصيانة"]
    }
  ];

  return (
    <div className="font-sans antialiased text-slate-900 bg-white" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-gold font-bold tracking-[3px] text-sm uppercase mb-4 block">Precision Solutions</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            خدماتنا <span className="text-gold text-outline">التقنية</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light">
            نجمع بين العلم والفن لنقدم لك أفضل ما وصلت إليه تكنولوجيا صناعة الأسنان الرقمية.
          </p>
        </div>
      </section>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group p-1 bg-white rounded-[2rem] border border-slate-100 hover:border-gold/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-slate-900 text-gold rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {s.features.map((f, idx) => (
                      <span key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-1.5 rounded-full">
                        <FaCheck className="text-gold text-[10px]" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL WORKFLOW ================= */}
      <section className="py-24 bg-slate-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">آلية العمل الرقمية</h2>
            <p className="text-slate-500">نظام صارم لضمان الجودة من الاستلام حتى التسليم</p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", label: "استلام الحالة", detail: "مراجعة الانطباعات والتعليمات" },
                { step: "02", label: "التصميم الرقمي", detail: "CAD Design ثلاثي الأبعاد" },
                { step: "03", label: "الإنتاج الآلي", detail: "خرط الزيركون أو طباعة النماذج" },
                { step: "04", label: "التلوين الفني", detail: "إضافة اللمسات الجمالية والشفافية" },
                { step: "05", label: "مراقبة الجودة", detail: "الفحص النهائي قبل التغليف" }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-100 group hover:border-gold transition-all">
                  <span className="block text-4xl font-black text-gold/10 group-hover:text-gold/20 mb-4 transition-colors">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-slate-900 mb-2">{step.label}</h4>
                  <p className="text-xs text-slate-500">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">جاهزون للارتقاء بجودة عيادتك؟</h2>
          <p className="text-slate-600 mb-12 text-lg">
            فريقنا جاهز لمناقشة التفاصيل الفنية لأي حالة معقدة. تواصل معنا اليوم.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/doctors"
              className="bg-gold text-slate-900 px-12 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gold/20 hover:scale-105 transition-all"
            >
              ابدأ التعاون الآن
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all"
            >
              استشارة فنية <FaArrowLeft className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}