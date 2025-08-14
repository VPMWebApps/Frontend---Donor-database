import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VolunteerEvents from "./components/VolunteerEvents/VolunteerEvents";
import CSRRequirement from "./components/CSRRequirement/CSRRequirement";
import ResearchPrograms from "./components/ResearchPrograms/ResearchPrograms";
import CSRDonor from "./components/CSRDonor/CSRDonor";
import IndividualDonor from "./components/IndividualDonor/IndividualDonor";

function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/individual-donor" element={<IndividualDonor />} />
          <Route path="/csr-donor" element={<CSRDonor />} />
          <Route path="/" element={<VolunteerEvents />} />
          <Route path="/research" element={<ResearchPrograms />} />
          <Route path="/csr-requirement" element={<CSRRequirement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
