function RegistrationSteps({ currentStep }) {
  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Academic & Workshop" },
    { number: 3, title: "Confirmation" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 shadow-lg
                ${currentStep >= step.number 
                  ? 'bg-cyan-600 text-white scale-110' 
                  : 'bg-gray-300 text-gray-600'}`}
            >
              {currentStep > step.number ? '✓' : step.number}
            </div>

            <div className="ml-4 hidden md:block">
              <p className={`font-bold text-lg ${currentStep >= step.number ? 'text-cyan-700' : 'text-gray-500'}`}>
                {step.title}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className={`flex-1 h-3 mx-6 rounded-full transition-all duration-500
                ${currentStep > step.number ? 'bg-cyan-600' : 'bg-gray-300'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationSteps;