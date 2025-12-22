import React from 'react';
import { Link } from 'react-router-dom';
import WorkshopCard from '../components/WorkshopCard';





function Workshops() {

  const workshops = [
    {
      id: 1,
      title: "Artificial Intelligence in Medical Diagnosis",
      instructor: "Pr. Karim BOUZID",
      date: "15 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Amphi B-201",
      totalSeats: 30,
      registered: 28,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    },
    {
      id: 2,
      title: "Surgical Robotics with Da Vinci",
      instructor: "Dr. Nadia CHENNOUF",
      date: "16 Décembre 2025",
      time: "09:00 - 12:00",
      room: "Robotics Laboratory",
      totalSeats: 20,
      registered: 19,
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800"
    },
    {
      id: 3,
      title: "Telemedicine and Connected Health",
      instructor: "Pr. Samir BELKACEM",
      date: "17 Décembre 2025",
      time: "10:00 - 13:00",
      room: "Salle C-105",
      totalSeats: 40,
      registered: 38,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
    },
    {
      id: 4,
      title: "big Data in medical Research",
      instructor: "Dr. Amine ZEGGAI",
      date: "15 Décembre 2025",
      time: "09:00 - 12:00",
      room: "Salle C-302",
      totalSeats: 35,
      registered: 32,
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 5,
      title: "Cybersecurity of Medical Systems",
      instructor: "Pr. Fatima ZOHRA",
      date: "16 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Amphi A-105",
      totalSeats: 50,
      registered: 45,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    },
    {
      id: 6,
      title: "3D Printing in Medical Prosthetics",
      instructor: "Ing. Hocine BELKADI",
      date: "17 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Manufacturing Lab",
      totalSeats: 25,
      registered: 24,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFVOJptGu4Z0xA_cBwcN2yhBLQDsov1q2dw&s"
    },
    {
      id: 7,
      title: "Virtual Reality in Medical Training",
      instructor: "Dr. Leila MERAH",
      date: "15 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Salle VR",
      totalSeats: 20,
      registered: 20,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmE88jcsewfqdDJjZP0MDEc2sUviVZtzIELQ&s"
    },
    {
      id: 8,
      title: "Blockchain in Medical Records Management",
      instructor: "Pr. Mourad HADJ",
      date: "16 Décembre 2025",
      time: "09:00 - 12:00",
      room: "Amphi B-305",
      totalSeats: 40,
      registered: 35,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUQ1Wb4k17M3DVzlWSyavBL1v-oBSelWSJw&s"
    },
    {
      id: 9,
      title: "Medical Drones and Emergency Delivery",
      instructor: "Ing. Ryad KHELIFI",
      date: "17 Décembre 2025",
      time: "09:00 - 12:00",
      room: "Exterior Campus",
      totalSeats: 30,
      registered: 27,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxsi69mnA0j8EQ2eJKfZZC_dG55I2_P1LoQ&s"
    }
  ];

 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* ==================== HEADER الفخم الطبي العلمي ==================== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        {/* الموجة العلوية الطبية */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1e40af" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L0,0Z"></path>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link to="/registration">
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg">
                Registration
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left z-10">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                University of Constantine 2<br />
                <span className="text-blue-300">Abdelhamid Mehri</span>
              </h1>
              <p className="text-xl md:text-2xl mt-3 font-semibold text-blue-200">
                Faculty of New Information and Communication Technologies
              </p>
              <p className="text-lg mt-4 opacity-90">
                Department of Fundamental Computer Science and its Applications
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQU9d44bQkg7Ux6CnPpC2dBqZtZT1euKLYaw&s" 
                alt="Université Constantine 2"
                className="relative h-32 md:h-40 rounded-full border-8 border-white/30 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* خط نبض القلب تحت الهيدر */}
        <div className="w-full h-16 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 L300,50 L320,10 L340,90 L360,50 L600,50 L620,20 L640,80 L660,50 L900,50 L920,15 L940,85 L960,50 L1440,50" 
                  stroke="#34d399" strokeWidth="6" fill="none" 
                  className="animate-pulse">
              <animate attributeName="stroke-dashoffset" from="1440" to="0" dur="8s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </header>

      {/* ==================== العنوان الرئيسي الكبير ==================== */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 py-24 text-white overflow-hidden">
        {/* خلفية دوائر طبية متحركة */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping"></div>
        </div>

        <div className="relative text-center px-6 z-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            Medical-Scientific Workshops
          </h1>
          <p className="text-3xl md:text-5xl font-bold mb-6">
            Innovation & Digital Health 2025
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <span className="px-10 py-4 bg-white/20 backdrop-blur-md rounded-full text-xl font-semibold border border-white/40">
              9 Exclusive Workshops
            </span>
            <span className="px-10 py-4 bg-white/20 backdrop-blur-md rounded-full text-xl font-semibold border border-white/40">
             Very Limited Places
            </span>
          </div>
        </div>

        {/* موجة سفلية للعنوان */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#f8fafc" d="M0,100 C360,200 1080,0 1440,100 L1440,200 L0,200 Z"></path>
        </svg>
      </section>

      {/* ==================== قائمة الورشات ==================== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center text-indigo-900 mb-16">
         Choose Your Workshop
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {workshops.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </div>

      {/* ==================== FOOTER الفخم الطبي العلمي ==================== */}
      <footer className="relative bg-gradient-to-t from-indigo-950 via-blue-900 to-blue-800 text-white overflow-hidden">
        {/* موجة علوية للفوتر */}
        <svg className="absolute top-0 w-full rotate-180" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#0f172a" opacity="0.6" d="M0,100 C360,0 1080,200 1440,100 L1440,0 L0,0 Z"></path>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center space-y-8 z-10">
          <div className="flex justify-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQU9d44bQkg7Ux6CnPpC2dBqZtZT1euKLYaw&s" 
              alt="Logo" 
              className="h-24 rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-black mb-4">Medical-Scientific Platform</h3>
            <p className="text-2xl text-cyan-300 font-semibold">
              University of Constantine 2 – Abdelhamid Mehri

            </p>
            
          </div>

          <div className="flex justify-center gap-12 text-cyan-300 text-lg font-medium">
            <span>Digital Health</span>
            <span>•</span>
            <span>Medical Innovation</span>
            <span>•</span>
            <span>Research & Development</span>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
           
          </div>
        </div>

        {/* خط نبض القلب في الفوتر */}
        <div className="absolute bottom-8 left-0 right-0">
          <svg className="w-full h-12" viewBox="0 0 1440 100">
            <path d="M0,50 L200,50 L220,20 L240,80 L260,50 L500,50 L520,10 L540,90 L560,50 L800,50 L820,25 L840,75 L860,50 L1100,50 L1120,15 L1140,85 L1160,50 L1440,50"
                  stroke="#22d3ee" strokeWidth="4" fill="none" opacity="0.6">
              <animate attributeName="stroke-dashoffset" from="1440" to="-1440" dur="12s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </footer>
    </div>  




  );
}

export default Workshops;