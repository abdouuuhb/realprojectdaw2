import { Routes, Route } from "react-router-dom";
import Workshops from "./Pages/Workshops";
import Registration from "./Pages/Registration";
import MyRegistrations from "./components/MyRegistrations";
import Interactive from "./Pages/Interactive"; // ← أضفنا الصفحة الجديدة هنا

function App() {
  return (
    <Routes>
      <Route path="/" element={<Workshops />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/my-registrations" element={<MyRegistrations />} />
      <Route path="/interactive" element={<Interactive />} /> {/* ← الروت الجديد */}
    </Routes>
  );
}

export default App;

