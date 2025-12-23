import { Link } from "react-router-dom";
import { useRegistration } from "../Context/RegistrationContext"; // للربط مع MyRegistrations لاحقًا

function Registration() {
  // حالة الخطوة الحالية في شريط التقدم
  const currentStep = 1; // غيّرها إلى 2 أو 3 عشان تشوف التغيير في الشريط

  // للربط مع MyRegistrations (اختياري دلوقتي، بس جاهز للمستقبل)
  const { addRegistration } = useRegistration();

  const handleRegistration = () => {
    // مثال: لما يضغط Confirm، يضيف تسجيل (لاحقًا هتجيب البيانات من النموذج)
    addRegistration({
      title: "Artificial Intelligence in Medical Diagnosis",
      date: "15 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Amphi B-201"
    });
    alert("🎉 تم التسجيل بنجاح! روح شوف في My Registrations");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1e40af" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L0,0Z" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <Link to="/" className="inline-block mb-6 text-cyan-300 font-semibold hover:text-white transition">
            ← Back to Workshops
          </Link>

          <h1 className="text-4xl md:text-5xl font-black">
            Medical Workshop Registration
          </h1>
          <p className="text-xl text-blue-200 mt-2">
            Innovation & Digital Health 2025
          </p>
        </div>

        <div className="w-full h-16 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1440 100">
            <path d="M0,50 L300,50 L320,10 L340,90 L360,50 L600,50 L620,20 L640,80 L660,50 L900,50 L920,15 L940,85 L960,50 L1440,50"
              stroke="#34d399" strokeWidth="6" fill="none" className="animate-pulse" />
          </svg>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 py-24 text-white text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
          Register & Join Innovation
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-blue-100">
          Secure your seat in exclusive medical workshops
        </p>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <span className="px-10 py-4 bg-white/20 backdrop-blur-md rounded-full text-xl font-semibold">
            Limited Seats
          </span>
          <span className="px-10 py-4 bg-white/20 backdrop-blur-md rounded-full text-xl font-semibold">
            Official Certification
          </span>
        </div>

        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#f8fafc" d="M0,100 C360,200 1080,0 1440,100 L1440,200 L0,200 Z" />
        </svg>
      </section>

      {/* ================= FORM CARD ================= */}
      <div className="relative -mt-24 max-w-4xl mx-auto px-6 pb-32">
        {/* شريط التقدم فوق الكارت */}
        <div className="mb-8">
          <RegistrationSteps currentStep={currentStep} />
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-6 text-white">
            <h3 className="text-3xl font-black">🩺 Participant Information</h3>
            <p className="text-blue-100 text-lg">
              Medical Workshop Registration Form
            </p>
          </div>

          {/* Card Body */}
          <div className="p-10 space-y-10">
            {/* Personal */}
            <section>
              <h4 className="section-title">👤 Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <input className="input-style" placeholder="First Name" />
                <input className="input-style" placeholder="Last Name" />
                <input className="input-style" placeholder="Email Address" />
                <input className="input-style" placeholder="+213 XXX XXX XXX" />
              </div>
            </section>

            {/* Academic */}
            <section>
              <h4 className="section-title">🎓 Academic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <input className="input-style" placeholder="Institution / University" />
                <select className="input-style">
                  <option>Academic Level</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PhD</option>
                  <option>Researcher</option>
                  <option>Professional</option>
                </select>
              </div>
            </section>

            {/* Workshop */}
            <section>
              <h4 className="section-title">🧪 Workshop Details</h4>
              <div className="space-y-6 mt-6">
                <select className="input-style">
                  <option>Select Workshop</option>
                  <option>AI in Medical Diagnosis</option>
                  <option>Surgical Robotics</option>
                  <option>Telemedicine</option>
                  <option>Big Data in Health</option>
                </select>

                <textarea rows="4" className="input-style resize-none" placeholder="Your motivation and expectations..." />
              </div>
            </section>

            {/* Submit */}
            <button
              onClick={handleRegistration} // استخدمنا الدالة اللي تضيف التسجيل
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-indigo-800 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 transition"
            >
              Confirm Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

  
    