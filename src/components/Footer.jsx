import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div>
            <img
              src="/logo-sm.webp"
              alt="مخبر الروضة - Al Rawda Dental Lab"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-white/60 leading-relaxed text-sm">
            نحن نجمع بين الدقة التكنولوجية والخبرة الفنية لنقدم لأطباء الأسنان 
            أفضل الحلول التعويضية والتجميلية في المنطقة.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61587548187060" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
              <FaFacebook />
            </a>
            <a href="https://wa.me/963956981594" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">روابط سريعة</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">عن المخبر</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">خدماتنا</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">معرض الأعمال</Link></li>
            <li><Link to="/doctors" className="hover:text-gold transition-colors">بوابة الأطباء</Link></li>
          </ul>
        </div>

        {/* Column 3: Services Summary */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">الخدمات الأساسية</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-center gap-2"><span>•</span> تيجان وجسور الزيركون</li>
            <li className="flex items-center gap-2"><span>•</span> عدسات الفينير التجميلية</li>
            <li className="flex items-center gap-2"><span>•</span> تركيبات الـ E-max</li>
            <li className="flex items-center gap-2"><span>•</span> التصميم الرقمي CAD/CAM</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">معلومات التواصل</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gold mt-1" />
              <span>دمشق – سوريا، الروضة<br/>شارع زهير بن أبي سلامة</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-gold" />
              <a href="https://wa.me/963956981594" dir="ltr" className="hover:text-gold transition-colors">00 963 95 69 81 594</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold" />
              <span dir="ltr">00 963 93 37 88 363</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold" />
              <span dir="ltr">00 963 11 33 37 738</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebook className="text-gold" />
              <a href="https://www.facebook.com/profile.php?id=61587548187060" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Al Rawda lab</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2026 مخبر الروضة لطب الأسنان. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
}