import { useState, useEffect, useRef, useCallback } from "react";
import { FaTh, FaTooth, FaStar, FaMicrochip } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ─── GALLERY DATA ─── */
const galleryData = [
  {
    id: 1, category: "zircon",
    title: "ابتسامة زيركون كاملة",
    desc: "تاج زيركون عالي الشفافية مع لون مطابق للأسنان الطبيعية",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fm=webp&q=55&w=700",
    span: "row-span-2",
  },
  {
    id: 2, category: "veneer",
    title: "فينير إيماكس تجميلي",
    desc: "قشرة خزفية رفيعة بسُمك 0.3 مم فقط لنتائج طبيعية خارقة",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?fm=webp&q=55&w=700",
    span: "",
  },
  {
    id: 3, category: "digital",
    title: "تصميم CAD/CAM دقيق",
    desc: "نظام مسح رقمي ثلاثي الأبعاد بدقة تصل إلى 20 ميكرون",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fm=webp&q=55&w=700",
    span: "",
  },
  {
    id: 4, category: "zircon",
    title: "جسور خلفية عالية الصلابة",
    desc: "زيركون متعدد الطبقات بقوة ضغط تتجاوز 900 ميجاباسكال",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?fm=webp&q=55&w=700",
    span: "",
  },
  {
    id: 5, category: "veneer",
    title: "إعادة تأهيل ابتسامة كاملة",
    desc: "20 قشرة خزفية في زيارة واحدة بتقنية الشكل الرقمي Digital Smile",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?fm=webp&q=55&w=700",
    span: "row-span-2",
  },
  {
    id: 6, category: "digital",
    title: "طباعة نماذج ثلاثية الأبعاد",
    desc: "نماذج طباعة دقيقة بدقة 25 ميكرون لجميع حالات التركيب",
    img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?fm=webp&q=55&w=700",
    span: "",
  },
  {
    id: 7, category: "zircon",
    title: "ابتسامة متكاملة أمامية",
    desc: "ستة أسنان أمامية بزيركون شفاف بدرجات لون مدروسة",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?fm=webp&q=55&w=700",
    span: "",
  },
  {
    id: 8, category: "veneer",
    title: "فينير بورسلان أبيض ناصع",
    desc: "بورسلان e.max مع درجة لون BL1 للمرضى الساعين للبياض الأقصى",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?fm=webp&q=55&w=700",
    span: "",
  },
];

const CATEGORIES = [
  { id: "all",     label: "الكل",          icon: FaTh },
  { id: "zircon",  label: "زيركون",        icon: FaTooth },
  { id: "veneer",  label: "فينير",         icon: FaStar },
  { id: "digital", label: "تقنيات رقمية", icon: FaMicrochip },
];

const STATS = [
  { value: "5000+", label: "حالة ناجحة" },
  { value: "120+",  label: "طبيب معتمد" },
  { value: "100%",  label: "دقة رقمية"  },
  { value: "24H",   label: "دعم فني"    },
];

/* ─── CUSTOM HOOK: Intersection Observer ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── ANIMATED COUNTER ─── */
function Counter({ target }) {
  const [ref, inView] = useInView();
  const [count, setCount] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const end = num;
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      const suffix = target.replace(/[0-9]/g, "");
      setCount(Math.floor(start) + suffix);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}</span>;
}

/* ─── TILT CARD COMPONENT ─── */
function TiltCard({ item, onClick, delay = 0, visible }) {
  const cardRef = useRef(null);
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
    const glow = card.querySelector(".glow");
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(160,132,60,0.35) 0%, transparent 65%)`;
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    card.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
    const glow = card.querySelector(".glow");
    if (glow) glow.style.background = "transparent";
  }, []);
  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.1s linear";
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => onClick(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`gallery-card ${item.span} ${visible ? "card-enter" : "card-hidden"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow layer */}
      <div className="glow absolute inset-0 z-10 rounded-3xl pointer-events-none transition-all duration-300" />

      {/* Image */}
      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

      {/* Overlay */}
      <div className="card-overlay absolute inset-0 flex flex-col justify-end p-6 rounded-3xl z-20">
        <span className="category-badge">{item.category}</span>
        <h3 className="text-white font-bold text-lg mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">{item.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">{item.desc}</p>
        <button className="mt-3 self-start text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
          <span>مشاهدة التفاصيل</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ─── LIGHTBOX MODAL ─── */
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-container" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <div className="lightbox-img-wrap">
          <img src={item.img} alt={item.title} className="lightbox-img" />
        </div>
        <div className="lightbox-info">
          <span className="category-badge">{item.category}</span>
          <h2 className="text-2xl font-bold text-white mt-3 mb-2">{item.title}</h2>
          <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function Gallery() {
  const [filter, setFilter]   = useState("all");
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  const [heroRef, heroInView] = useInView();

  const filtered = filter === "all" ? galleryData : galleryData.filter(i => i.category === filter);

  // Stagger entrance when filter changes
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [filter]);

  return (
    <>
      <style>{`
        /* ── Base ── */
        .gallery-page { background: #00281A; min-height: 100vh; font-family: 'Cairo', sans-serif; direction: rtl; }

        /* ── Hero ── */
        .hero-section {
          position: relative; padding: 160px 24px 100px; text-align: center;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(160,132,60,0.18) 0%, transparent 60%), #00281A;
          overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none; overflow: hidden;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none;
        }
        .hero-orb-1 { width: 500px; height: 500px; background: rgba(160,132,60,0.12); top: -100px; right: -100px; }
        .hero-orb-2 { width: 400px; height: 400px; background: rgba(0,80,50,0.3); bottom: -80px; left: -80px; }
        .hero-title { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; color: #fff; line-height: 1.1; position: relative; z-index: 2; }
        .hero-title .gold { color: #a0843c; }
        .hero-subtitle { max-width: 560px; margin: 20px auto 0; color: rgba(255,255,255,0.5); font-size: 1.1rem; position: relative; z-index: 2; }
        .hero-line { width: 80px; height: 3px; background: linear-gradient(90deg, #a0843c, transparent); margin: 20px auto; border-radius: 999px; position: relative; z-index: 2; }

        /* ── Filter ── */
        .filter-section {
          padding: 40px 24px;
          background: rgba(0,40,26,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(160,132,60,0.1);
          position: sticky; top: 70px; z-index: 50;
        }
        .filter-wrap { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .filter-btn {
          position: relative; padding: 10px 28px; border-radius: 999px; border: 1px solid rgba(160,132,60,0.2);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.6);
          font-weight: 700; font-size: 0.9rem; cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          overflow: hidden; letter-spacing: 0.02em;
          display: flex; align-items: center; gap: 8px;
        }
        .filter-btn::before {
          content: ''; position: absolute; inset: 0; border-radius: 999px;
          background: linear-gradient(135deg, #a0843c, #7a6230);
          opacity: 0; transition: opacity 0.3s;
        }
        .filter-btn:hover { color: #fff; border-color: rgba(160,132,60,0.5); transform: translateY(-2px); }
        .filter-btn.active { color: #fff; border-color: transparent; box-shadow: 0 8px 30px rgba(160,132,60,0.35); transform: translateY(-2px); }
        .filter-btn.active::before { opacity: 1; }
        .filter-btn span, .filter-btn em { position: relative; z-index: 1; }
        .filter-btn em { font-style: normal; font-size: 1rem; }

        /* ── Grid ── */
        .grid-section { padding: 60px 24px 80px; }
        .gallery-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          grid-auto-rows: 280px;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .gallery-card {
          position: relative; border-radius: 24px; overflow: hidden; cursor: pointer;
          transition: box-shadow 0.4s;
          will-change: transform;
        }
        .gallery-card:hover { box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(160,132,60,0.2); }
        .gallery-card.row-span-2 { grid-row: span 2; }
        .card-hidden { opacity: 0; transform: translateY(30px) scale(0.96); }
        .card-enter  { opacity: 1; transform: translateY(0) scale(1); transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1); }
        .card-overlay {
          background: linear-gradient(to top, rgba(0,20,12,0.95) 0%, rgba(0,20,12,0.3) 60%, transparent 100%);
          opacity: 0; transition: opacity 0.4s; border-radius: 24px;
        }
        .gallery-card:hover .card-overlay { opacity: 1; }
        .category-badge {
          display: inline-block; padding: 3px 12px; border-radius: 999px; font-size: 0.7rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;
          background: rgba(160,132,60,0.3); border: 1px solid rgba(160,132,60,0.5);
          color: #a0843c; backdrop-filter: blur(10px);
        }

        /* ── Stats ── */
        .stats-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, rgba(160,132,60,0.08) 0%, rgba(0,60,38,0.3) 50%, rgba(0,40,26,0.9) 100%);
          border-top: 1px solid rgba(160,132,60,0.1);
          border-bottom: 1px solid rgba(160,132,60,0.1);
        }
        .stats-grid { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(2,1fr); gap: 40px; }
        @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(4,1fr); } }
        .stat-item { text-align: center; }
        .stat-value { font-size: 3rem; font-weight: 900; color: #a0843c; line-height: 1; margin-bottom: 8px; letter-spacing: -0.02em; }
        .stat-label { color: rgba(255,255,255,0.45); font-size: 0.85rem; }

        /* ── CTA ── */
        .cta-section { padding: 100px 24px; text-align: center; background: #00281A; }
        .cta-box {
          max-width: 640px; margin: 0 auto; padding: 60px 48px; border-radius: 32px;
          border: 1px solid rgba(160,132,60,0.15);
          background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(160,132,60,0.04));
          backdrop-filter: blur(20px);
          position: relative; overflow: hidden;
        }
        .cta-box::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(160,132,60,0.1), transparent 70%);
        }
        .cta-title { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; color: #fff; margin-bottom: 16px; position: relative; z-index: 1; }
        .cta-sub { color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 36px; font-size: 0.95rem; position: relative; z-index: 1; }
        .cta-btn {
          position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 48px; border-radius: 16px; font-weight: 700; font-size: 1rem;
          background: linear-gradient(135deg, #a0843c, #7a6230);
          color: #fff; text-decoration: none;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 8px 30px rgba(160,132,60,0.3);
        }
        .cta-btn:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 20px 50px rgba(160,132,60,0.45); }

        /* ── Lightbox ── */
        .lightbox-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.9); backdrop-filter: blur(16px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn 0.25s ease;
        }
        .lightbox-container {
          background: linear-gradient(145deg, #001a10, #002818);
          border-radius: 24px; overflow: hidden; max-width: 720px; width: 100%;
          border: 1px solid rgba(160,132,60,0.2);
          animation: slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
        }
        .lightbox-close {
          position: absolute; top: 16px; left: 16px; z-index: 10;
          width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.5); color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; backdrop-filter: blur(10px);
        }
        .lightbox-close:hover { background: rgba(160,132,60,0.3); border-color: #a0843c; }
        .lightbox-img-wrap { height: 380px; overflow: hidden; }
        .lightbox-img { width: 100%; height: 100%; object-fit: cover; }
        .lightbox-info { padding: 28px 32px 32px; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95) } to { opacity: 1; transform: translateY(0) scale(1) } }

        /* ── Particle dots ── */
        .dots-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(160,132,60,0.15) 1px, transparent 1px);
          background-size: 32px 32px; z-index: 0;
        }
      `}</style>

      <div className="gallery-page">

        {/* ══ HERO ══ */}
        <section className="hero-section" ref={heroRef}>
          <div className="hero-grid-bg" />
          <div className="dots-bg" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className={`transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4 relative z-10" style={{color:"#a0843c"}}>✦ معرض الأعمال ✦</p>
            <h1 className="hero-title">
              معرض <span className="gold">الإتقان</span>
            </h1>
            <div className="hero-line" />
            <p className="hero-subtitle">
              استكشف دقة التفاصيل في أعمالنا الواقعية، حيث يلتقي العلم بالفن لتقديم أفضل النتائج.
            </p>
          </div>
        </section>

        {/* ══ FILTER ══ */}
        <section className="filter-section">
          <div className="filter-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              >
                <cat.icon style={{fontSize:"0.9rem"}} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ══ GRID ══ */}
        <section className="grid-section">
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <TiltCard
                key={item.id}
                item={item}
                delay={i * 80}
                visible={visible}
                onClick={setSelected}
              />
            ))}
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="stats-section">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-value"><Counter target={s.value} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="cta-section">
          <div className="cta-box">
            <p style={{color:"#a0843c"}} className="text-sm font-bold uppercase tracking-widest mb-4">ابدأ معنا اليوم</p>
            <h2 className="cta-title">هل تبحث عن هذا المستوى من الإتقان؟</h2>
            <p className="cta-sub">
              انضم لمجتمع الأطباء الذين يثقون بمخبر الروضة لتحويل خططهم العلاجية إلى واقع ملموس بأعلى معايير الجودة.
            </p>
            <Link to="/doctors" className="cta-btn">
              <span>ابدأ التعاون الآن</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </Link>
          </div>
        </section>

      </div>

      {/* ══ LIGHTBOX ══ */}
      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}