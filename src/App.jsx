import { Routes, Route } from "react-router-dom";
import Workshops from "./Pages/Workshops";
import Registration from "./Pages/Registration";
import MyRegistrations from "./components/MyRegistrations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Workshops />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-6xl font-bold text-gray-600">404 - Page Not Found</h1>
          <Route path="/registration" element={<Registration />} />
      <Route path="/my-registrations" element={<MyRegistrations />} />
      <Route path="/my-registrations" element={<MyRegistrations />} />
        </div>
      } />
    </Routes>
  );
}

export default App;  // ✅ هذا السطر مهم جداً!

