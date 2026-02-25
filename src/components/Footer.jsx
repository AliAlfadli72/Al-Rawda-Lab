import { Link } from "react-router-dom";
import { FaTooth, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-gold p-1.5 rounded-lg">
              <FaTooth className="text-slate-900 text-lg" />
            </div>
            <span className="font-bold text-xl tracking-tight">مخبر الروضة</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm">
            نحن نجمع بين الدقة التكنولوجية والخبرة الفنية لنقدم لأطباء الأسنان 
            أفضل الحلول التعويضية والتجميلية في المنطقة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-slate-950 transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-slate-950 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-slate-950 transition-all">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">روابط سريعة</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">عن المخبر</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">خدماتنا</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">معرض الأعمال</Link></li>
            <li><Link to="/doctors" className="hover:text-gold transition-colors">بوابة الأطباء</Link></li>
          </ul>
        </div>

        {/* Column 3: Services Summary */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">الخدمات الأساسية</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-2"><span>•</span> تيجان وجسور الزيركون</li>
            <li className="flex items-center gap-2"><span>•</span> عدسات الفينير التجميلية</li>
            <li className="flex items-center gap-2"><span>•</span> تركيبات الـ E-max</li>
            <li className="flex items-center gap-2"><span>•</span> التصميم الرقمي CAD/CAM</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-4 border-gold pr-3">معلومات التواصل</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gold" />
              <span>العنوان: الشارع الرئيسي، وسط المدينة</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold" />
              <span dir="ltr">+963 11 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gold" />
              <span>info@alrawdalab.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2026 مخبر الروضة لطب الأسنان. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
}