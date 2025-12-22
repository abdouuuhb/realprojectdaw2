import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm"; // هيستورد النموذج

function EventRegistration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 py-32 text-white text-center overflow-hidden">
        {/* دوائر blur متحركة في الخلفية */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-bounce"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link 
            to="/workshops" 
            className="inline-block mb-8 text-cyan-200 font-semibold hover:text-white transition text-xl"
          >
            ← Back to Workshops
          </Link>

          <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl">
            Register & Join Innovation
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-blue-100 mb-10">
            Secure your seat in exclusive medical workshops
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <span className="px-12 py-5 bg-white/20 backdrop-blur-md rounded-full text-2xl font-bold border border-white/40">
              Limited Seats
            </span>
            <span className="px-12 py-5 bg-white/20 backdrop-blur-md rounded-full text-2xl font-bold border border-white/40">
              Official Certification
            </span>
          </div>
        </div>

        {/* موجة سفلية */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#f8fafc" d="M0,100 C360,200 1080,0 1440,100 L1440,200 L0,200 Z" />
        </svg>
      </section>

      {/* ================= FORM CARD (النموذج من ملف منفصل) ================= */}
      <div className="relative -mt-20 max-w-4xl mx-auto px-6 pb-32">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-cyan-200">

          {/* نبض قلب خفيف في الخلفية */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 1000">
              <path d="M0,500 L240,500 L260,450 L280,550 L300,500 L600,500 L620,460 L640,540 L660,500 L960,500 L980,455 L1000,545 L1020,500 L1440,500"
                stroke="#10b981" strokeWidth="10" fill="none" />
            </svg>
          </div>

          {/* عنوان الكارت الرئيسي */}
          <div className="text-center py-12 bg-gradient-to-b from-cyan-50 to-transparent relative z-10">
            <h2 className="text-5xl font-black text-indigo-900 flex items-center justify-center gap-4">
              <span className="text-6xl">🩺</span>
              Participant Registration Form
            </h2>
            <p className="text-2xl text-cyan-700 mt-4 font-semibold">
              Innovation & Digital Health Workshops 2025
            </p>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mx-auto"></div>
          </div>

          {/* هنا هيجي النموذج من الملف المنفصل */}
          <div className="relative z-10 px-10 pb-12">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRegistration;