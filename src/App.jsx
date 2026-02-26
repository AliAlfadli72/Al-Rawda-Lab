
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ── Lazy load كل صفحة على حدة (Code Splitting)
// كل صفحة تُحمَّل فقط عند الحاجة إليها
const Home     = lazy(() => import("./pages/Home"));
const About    = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery  = lazy(() => import("./pages/Gallery"));
const Doctors  = lazy(() => import("./pages/Doctors"));
const Contact  = lazy(() => import("./pages/Contact"));

// ── Loading skeleton بسيط يُعرض أثناء تحميل الصفحة
function PageLoader() {
  return (
    <div style={{
      minHeight: "60vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#00281A"
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        border: "3px solid rgba(160,132,60,0.2)",
        borderTopColor: "#a0843c",
        animation: "spin 0.7s linear infinite"
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"         element={<Home />}     />
            <Route path="/about"    element={<About />}    />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery"  element={<Gallery />}  />
            <Route path="/doctors"  element={<Doctors />}  />
            <Route path="/contact"  element={<Contact />}  />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
