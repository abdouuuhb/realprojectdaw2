// src/components/admin/CreateWorkshop.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateWorkshop = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    date: '',
    time: '',
    room: '',
    totalSeats: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'العنوان مطلوب';
    if (!formData.instructor.trim()) newErrors.instructor = 'اسم الأستاذ مطلوب';
    if (!formData.date) newErrors.date = 'التاريخ مطلوب';
    if (!formData.time) newErrors.time = 'الوقت مطلوب';
    if (!formData.room.trim()) newErrors.room = 'القاعة مطلوبة';
    if (!formData.totalSeats || formData.totalSeats <= 0) newErrors.totalSeats = 'عدد المقاعد يجب أن يكون أكبر من 0';
    if (!formData.image.trim()) newErrors.image = 'رابط الصورة مطلوب';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // جلب الورشات الحالية
    const existingWorkshops = JSON.parse(localStorage.getItem('workshops') || '[]');

    // إنشاء ورشة جديدة
    const newWorkshop = {
      id: Date.now(),
      registered: 0,
      ...formData,
      totalSeats: parseInt(formData.totalSeats)
    };

    // حفظها
    localStorage.setItem('workshops', JSON.stringify([...existingWorkshops, newWorkshop]));
    
    setSuccess(true);
    setTimeout(() => {
      navigate('/admin');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-indigo-900 mb-4">
            إضافة ورشة علمية جديدة
          </h1>
          <p className="text-xl text-gray-700">لوحة تحكم الإدارة • جامعة قسنطينة 2</p>
        </div>

        {/* رسالة النجاح */}
        {success && (
          <div className="mb-8 p-6 bg-green-100 border-2 border-green-600 rounded-2xl text-center">
            <p className="text-2xl font-bold text-green-800">
              تم إضافة الورشة بنجاح!
            </p>
            <p className="text-lg text-green-700 mt-2">جاري التوجيه إلى لوحة التحكم...</p>
          </div>
        )}

        {/* النموذج */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-indigo-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xl font-bold text-indigo-900 mb-3">
                عنوان الورشة
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                placeholder="مثال: Atelier IA en Santé Numérique"
              />
              {errors.title && <p className="text-red-600 mt-2">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-xl font-bold text-indigo-900 mb-3">
                اسم الأستاذ / المؤطر
              </label>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                placeholder="مثال: Pr. Karim BOUZID"
              />
              {errors.instructor && <p className="text-red-600 mt-2">{errors.instructor}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-bold text-indigo-900 mb-3">التاريخ</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                />
                {errors.date && <p className="text-red-600 mt-2">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xl font-bold text-indigo-900 mb-3">الوقت</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                  placeholder="مثال: 14:00 - 17:00"
                />
                {errors.time && <p className="text-red-600 mt-2">{errors.time}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-bold text-indigo-900 mb-3">القاعة</label>
                <input
                  type="text"
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                  placeholder="مثال: Amphi B-201"
                />
                {errors.room && <p className="text-red-600 mt-2">{errors.room}</p>}
              </div>

              <div>
                <label className="block text-xl font-bold text-indigo-900 mb-3">عدد المقاعد</label>
                <input
                  type="number"
                  name="totalSeats"
                  value={formData.totalSeats}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                  placeholder="مثال: 30"
                  min="1"
                />
                {errors.totalSeats && <p className="text-red-600 mt-2">{errors.totalSeats}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xl font-bold text-indigo-900 mb-3">
                رابط الصورة (Unsplash أو أي رابط)
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-lg"
                placeholder="https://images.unsplash.com/..."
              />
              {errors.image && <p className="text-red-600 mt-2">{errors.image}</p>}
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <button
                type="submit"
                className="px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-2xl font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all shadow-xl"
              >
                إضافة الورشة الآن
              </button>

              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="px-12 py-6 bg-gray-600 text-white text-2xl font-bold rounded-2xl hover:bg-gray-700 transition-all shadow-xl"
              >
                العودة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkshop;