import { useState } from "react";

function RegistrationForm() {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const workshops = [
    { id: 1, title: "Artificial Intelligence in Medical Diagnosis", seatsLeft: 2 },
    { id: 2, title: "Surgical Robotics with Da Vinci", seatsLeft: 1 },
    { id: 3, title: "Telemedicine and Connected Health", seatsLeft: 2 },
    { id: 4, title: "Big Data in Medical Research", seatsLeft: 3 },
    { id: 5, title: "Cybersecurity of Medical Systems", seatsLeft: 5 },
    { id: 6, title: "3D Printing in Medical Prosthetics", seatsLeft: 1 },
    { id: 7, title: "Virtual Reality in Medical Training", seatsLeft: 0 },
    { id: 8, title: "Blockchain in Medical Records Management", seatsLeft: 5 },
    { id: 9, title: "Medical Drones and Emergency Delivery", seatsLeft: 3 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("⚠️ يجب قبول الشروط والأحكام لإكمال التسجيل!");
      return;
    }
    alert("🎉 تم التسجيل بنجاح!\nسيتم إرسال تأكيد على البريد الإلكتروني قريباً.");
    // لاحقًا هتربط ده بالـ registrationService.js
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">

      {/* Personal Information */}
      <section>
        <h4 className="text-3xl font-bold text-indigo-800 flex items-center gap-4">
          <span className="text-4xl">👤</span> Personal Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <input className="medical-input" placeholder="First Name" required />
          <input className="medical-input" placeholder="Last Name" required />
          <input className="medical-input" type="email" placeholder="Email Address" required />
          <input className="medical-input" placeholder="Phone (+213 XXX XXX XXX)" required />
        </div>
      </section>

      {/* Academic / Professional */}
      <section>
        <h4 className="text-3xl font-bold text-indigo-800 flex items-center gap-4">
          <span className="text-4xl">🎓</span> Academic / Professional Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <input className="medical-input" placeholder="Institution / University / Company" required />
          <select className="medical-input" required>
            <option value="">Select Your Level</option>
            <option>Bachelor Student</option>
            <option>Master Student</option>
            <option>PhD Student</option>
            <option>Researcher</option>
            <option>Healthcare Professional</option>
            <option>Other</option>
          </select>
        </div>
      </section>

      {/* Workshop Selection */}
      <section>
        <h4 className="text-3xl font-bold text-indigo-800 flex items-center gap-4">
          <span className="text-4xl">🧪</span> Select Your Workshop
        </h4>
        <div className="mt-8">
          <select className="medical-input text-lg" required>
            <option value="">Choose a Workshop</option>
            {workshops.map((w) => {
              const status = w.seatsLeft === 0 
                ? "Full - Complet" 
                : `${w.seatsLeft} seat${w.seatsLeft > 1 ? 's' : ''} left`;
              const color = w.seatsLeft === 0 ? "text-red-600 font-bold" 
                : w.seatsLeft <= 2 ? "text-orange-600 font-bold" : "text-green-600";
              return (
                <option key={w.id} value={w.title} disabled={w.seatsLeft === 0}>
                  {w.title} — <span className={color}>{status}</span>
                </option>
              );
            })}
          </select>
        </div>

        <div className="mt-8">
          <textarea 
            rows="5" 
            className="medical-input resize-none" 
            placeholder="Your motivation and expectations for attending this workshop..." 
            required 
          />
        </div>
      </section>

      {/* Payment Method */}
      <section>
        <h4 className="text-3xl font-bold text-indigo-800 flex items-center gap-4">
          <span className="text-4xl">💳</span> Payment Method
        </h4>
        <div className="mt-8 space-y-5">
          <label className="flex items-center gap-5 text-xl cursor-pointer">
            <input type="radio" name="payment" value="on-site" defaultChecked className="w-6 h-6 text-cyan-600" />
            <span>Payment on site (recommended)</span>
          </label>
          <label className="flex items-center gap-5 text-xl cursor-pointer">
            <input type="radio" name="payment" value="online" className="w-6 h-6 text-cyan-600" />
            <span>Online payment (coming soon)</span>
          </label>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section>
        <label className="flex items-start gap-5 cursor-pointer">
          <input 
            type="checkbox" 
            className="w-7 h-7 text-cyan-600 mt-1 rounded focus:ring-cyan-500" 
            checked={acceptTerms} 
            onChange={(e) => setAcceptTerms(e.target.checked)} 
            required 
          />
          <span className="text-xl text-gray-700 leading-relaxed">
            I accept the <span className="text-cyan-700 font-bold">terms and conditions</span> of participation and the <span className="text-cyan-700 font-bold">privacy policy</span> of the event.
          </span>
        </label>
      </section>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full py-6 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-indigo-800 text-white font-black text-3xl rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center gap-4"
      >
        <span>Confirm Registration</span>
        <span className="text-4xl">🎉</span>
      </button>

    </form>
  );
}

// كلاس مخصص للحقول (ضيفه في tailwind أو globals.css لو مش موجود)
const styles = `
  .medical-input {
    @apply w-full px-8 py-5 rounded-2xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 transition-all duration-300 text-xl shadow-sm;
  }
`;

export default RegistrationForm;