import { useState } from "react";
import { Link } from "react-router-dom";
import { FaExpandAlt, FaFlask, FaTooth } from "react-icons/fa";

const galleryData = [
  {
    id: 1,
    category: "zircon",
    title: "ابتسامة زيركون كاملة",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800",
  },
  {
    id: 2,
    category: "veneer",
    title: "فينير إيماكس تجميلي",
    img: "https://images.unsplash.com/photo-1593059025398-0f5ce0174242?q=80&w=800",
  },
  {
    id: 3,
    category: "digital",
    title: "تصميم CAD/CAM دقيق",
    img: "https://images.unsplash.com/photo-1551606713-23363300589a?q=80&w=800",
  },
  {
    id: 4,
    category: "zircon",
    title: "جسور خلفية عالية الصلابة",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
  },
  {
    id: 5,
    category: "veneer",
    title: "إعادة تأهيل ابتسامة",
    img: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=800",
  },
  {
    id: 6,
    category: "digital",
    title: "طباعة نماذج ثلاثية الأبعاد",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const categories = [
    { id: "all", label: "الكل" },
    { id: "zircon", label: "زيركون" },
    { id: "veneer", label: "فينير" },
    { id: "digital", label: "تقنيات رقمية" },
  ];

  return (
    <div className="bg-white font-sans" dir="rtl">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            معرض <span className="text-gold">الإتقان</span>
          </h1>
          <div className="w-20 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light">
            استكشف دقة التفاصيل في أعمالنا الواقعية، حيث يلتقي العلم بالفن لتقديم أفضل النتائج.
          </p>
        </div>
      </section>

      {/* ================= FILTER SYSTEM ================= */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-3 md:gap-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gold text-slate-900 shadow-lg shadow-gold/20 translate-y-[-2px]"
                  : "bg-white text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= MODERN IMAGE GRID ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="relative break-inside-avoid group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-100"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-gold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaTooth className="text-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  <button className="w-fit flex items-center gap-2 text-white text-sm font-semibold border-b border-gold/50 pb-1 hover:text-gold hover:border-gold transition-all">
                    تفاصيل الحالة <FaExpandAlt className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LABORATORY STATS ================= */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-gold text-4xl font-black mb-2 tracking-tighter">5000+</p>
            <p className="text-slate-400 text-sm">حالة ناجحة</p>
          </div>
          <div>
            <p className="text-gold text-4xl font-black mb-2 tracking-tighter">120+</p>
            <p className="text-slate-400 text-sm">طبيب معتمد</p>
          </div>
          <div>
            <p className="text-gold text-4xl font-black mb-2 tracking-tighter">100%</p>
            <p className="text-slate-400 text-sm">دقة رقمية</p>
          </div>
          <div>
            <p className="text-gold text-4xl font-black mb-2 tracking-tighter">24H</p>
            <p className="text-slate-400 text-sm">دعم فني للأطباء</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-white relative">
        <div className="max-w-3xl mx-auto border-2 border-slate-100 p-12 rounded-[3rem] hover:border-gold transition-colors duration-500">
           <FaFlask className="text-5xl text-gold/20 mx-auto mb-6" />
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">هل تبحث عن هذا المستوى من الإتقان؟</h2>
           <p className="text-slate-500 mb-10 leading-relaxed">
             انضم لمجتمع الأطباء الذين يثقون في مخبر الروضة لتحويل خططهم العلاجية إلى واقع ملموس.
           </p>
           <Link
            to="/doctors"
            className="inline-block bg-slate-950 text-white hover:bg-gold hover:text-slate-900 px-12 py-4 rounded-2xl font-bold text-lg transition-all"
          >
            ابدأ التعاون الآن
          </Link>
        </div>
      </section>

    </div>
  );
}