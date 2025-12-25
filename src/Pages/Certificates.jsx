import { Link } from "react-router-dom";

function Certificates() {
  // بيانات وهمية لشهادات المستخدم (للديمو)
  const myCertificates = [
    {
      id: 1,
      workshop: "Artificial Intelligence in Medical Diagnosis",
      date: "15 December 2025",
      status: "Completed",
    },
    {
      id: 2,
      workshop: "Surgical Robotics with Da Vinci",
      date: "16 December 2025",
      status: "Completed",
    },
    {
      id: 3,
      workshop: "Telemedicine and Digital Health",
      date: "17 December 2025",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* ================= HEADER sky blue فخم ================= */}
      <header className="bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-700 text-white py-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Link to="/workshops" className="inline-block mb-6">
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur">
              ← Back to Workshops
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">
            My Certificates
          </h1>
          <p className="text-2xl md:text-3xl font-semibold opacity-90">
            Innovation & Digital Health 2025
          </p>
          <p className="text-xl mt-4 opacity-80">
            Download your official attendance certificates
          </p>
        </div>

        {/* نبض قلب */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70">
          <svg className="w-full h-full" viewBox="0 0 1440 100">
            <path d="M0,50 L300,50 L320,20 L340,80 L360,50 L600,50 L620,10 L640,90 L660,50 L900,50 L920,15 L940,85 L960,50 L1440,50"
                  stroke="#0891b2" strokeWidth="5" fill="none" className="animate-pulse" />
          </svg>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-sky-500 via-cyan-600 to-blue-600 py-28 text-white text-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">
            Your Achievements
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-10">
            Official Certificates of Attendance
          </p>
        </div>
      </section>

      {/* ================= قائمة الشهادات ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center text-cyan-900 mb-16">
          My Attendance Certificates
        </h2>

        {myCertificates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-3xl text-gray-600">No certificates yet.</p>
            <p className="text-xl mt-4 text-gray-500">Complete workshops to earn certificates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {myCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-cyan-200">
                {/* معاينة الشهادة (وهمية) */}
                <div className="h-64 bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-2xl font-bold text-cyan-900">Certificate of Attendance</p>
                    <p className="text-lg text-gray-700 mt-2">{cert.workshop}</p>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-900">{cert.workshop}</h3>
                  <p className="text-lg text-gray-600">Date: {cert.date}</p>
                  <p className="text-lg font-semibold text-green-600">{cert.status}</p>

                  {/* زر تحميل وهمي */}
                  <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-bold text-xl rounded-xl hover:shadow-xl transform hover:scale-105 transition">
                    Download PDF Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-t from-cyan-900 via-sky-800 to-cyan-700 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-3xl font-black mb-4">
            Medical-Scientific Platform
          </p>
          <p className="text-xl opacity-90 mb-6">
            University of Constantine 2 – Abdelhamid Mehri
          </p>
          <p className="text-lg opacity-80">
            Innovation & Digital Health 2025
          </p>
          <p className="mt-8 text-sm opacity-70">
            © 2025 All rights reserved
          </p>
        </div>

        <div className="absolute bottom-4 left-0 right-0 opacity-50">
          <svg className="w-full h-8" viewBox="0 0 1440 100">
            <path d="M0,50 L360,50 L380,30 L400,70 L420,50 L720,50 L740,20 L760,80 L780,50 L1080,50 L1100,35 L1120,65 L1140,50 L1440,50"
                  stroke="#67e8f9" strokeWidth="3" fill="none">
              <animate attributeName="stroke-dashoffset" from="1440" to="-1440" dur="15s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default Certificates;