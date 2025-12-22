import React from 'react';
import { Link } from "react-router-dom";

const WorkshopCard = ({ workshop }) => {
  const seatsLeft = workshop.totalSeats - workshop.registered;
  const fallback = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800";

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 overflow-hidden transform hover:-translate-y-3">
      {/* صورة الورشة + عدد المقاعد المتبقية */}
      <div className="relative h-56 bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden group">
        <img
          src={workshop.image || fallback}
          alt={workshop.title}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          onError={(e) => (e.target.src = fallback)}
        />

        {/* Badge عدد المقاعد */}
        <div
          className={`absolute top-4 right-4 px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg ${
            seatsLeft === 0
              ? 'bg-red-600 animate-pulse'
              : seatsLeft <= 5
              ? 'bg-orange-600'
              : 'bg-green-600'
          }`}
        >
          {seatsLeft === 0 ? 'Complet' : `${seatsLeft} places`}
        </div>
      </div>

      {/* محتوى الكارت */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 line-clamp-2">
          {workshop.title}
        </h3>

        <div className="space-y-3 text-gray-700">
          <p>
            <strong className="text-indigo-600">Animateur :</strong> {workshop.instructor}
          </p>
          <p>
            <strong className="text-indigo-600">Date :</strong> {workshop.date}
          </p>
          <p>
            <strong className="text-indigo-600">Heure :</strong> {workshop.time}
          </p>
          <p>
            <strong className="text-indigo-600">Salle :</strong> {workshop.room}
          </p>
        </div>

        {/* زر التسجيل - الآن داخل الـ component */}
        {seatsLeft > 0 ? (
          <Link to="/registration" className="block mt-8">
            <button className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg transform hover:scale-105 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-indigo-800">
              Register
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="w-full mt-8 py-4 rounded-xl font-bold text-white bg-gray-500 cursor-not-allowed opacity-70"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkshopCard;