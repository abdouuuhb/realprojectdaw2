import React from 'react';
import WorkshopCard from './WorkshopCard';  // استدعاء الكارت من نفس المجلد

const WorkshopsList = () => {
  // خطوة داخلية 1: البيانات تاع الورشات (مثال حقيقي من النقطة 7 في الـ PDF)
  const workshops = [
    {
      id: 1,
      title: "Atelier IA en Santé Numérique",
      instructor: "Pr. Karim BOUZID",
      date: "15 Décembre 2025",
      time: "14:00 - 17:00",
      room: "Amphi B-201",
      totalSeats: 30,
      registered: 23,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    },
    {
      id: 2,
      title: "Workshop Robotique Chirurgicale",
      instructor: "Dr. Nadia CHENNOUF",
      date: "16 Décembre 2025",
      time: "09:00 - 12:00",
      room: "Labo Robotique",
      totalSeats: 20,
      registered: 19,
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800"
    },
    {
      id: 3,
      title: "Atelier Télémédecine Pratique",
      instructor: "Pr. Samir BELKACEM",
      date: "17 Décembre 2025",
      time: "10:00 - 13:00",
      room: "Salle C-105",
      totalSeats: 40,
      registered: 38,
      image: "https://images.unsplash.com/photo-1581092160562-36aa8c5d9f1e?w=800"
    }
  ];

  return (
    // خطوة داخلية 2: الخلفية الرئيسية (أزرق سماوي فاتح زي ما تحب)
    <div className="min-h-screen bg-sky-100 py-16 px-8">
      // خطوة داخلية 3: العنوان الكبير
      <h1 className="text-5xl font-bold text-center text-green-700 mb-12">
       List of Scientific Workshops (Workshop Management)
      </h1>

      // خطوة داخلية 4: عرض الكروت (استعمال WorkshopCard.jsx)
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopsList;