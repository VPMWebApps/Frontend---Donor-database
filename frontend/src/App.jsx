import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VolunteerEvents from "./components/VolunteerEvents/VolunteerEvents";
import CSRRequirement from "./components/CSRRequirement/CSRRequirement";
import ResearchPrograms from "./components/ResearchPrograms/ResearchPrograms";
import CSRDonor from "./components/CSRDonor/CSRDonor";
import IndividualDonor from "./components/IndividualDonor/IndividualDonor";
import NGOPartners from "./components/NGOPartners/NGOPartners";
import Sponsor from "./components/Sponsor/Sponsor";


const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("role") || "guest";

  if (role === "guest") {
    return <Navigate to="/" replace />;
  }

  return children;
};


function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/individual-donor" element={<ProtectedRoute><IndividualDonor /></ProtectedRoute>} />
          <Route path="/csr-donor" element={<ProtectedRoute><CSRDonor /></ProtectedRoute>} />
          <Route path="/" element={<VolunteerEvents />} />
          <Route path="/research" element={<ResearchPrograms />} />
          <Route path="/csr-requirement" element={<CSRRequirement />} />
          <Route path="/ngo-partners" element={<ProtectedRoute><NGOPartners /></ProtectedRoute>} />
          <Route path="/sponsor-sp" element={<Sponsor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
