import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md py-4 px-8 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-2">VPM TRUST</h1>
      <div className="flex gap-6 flex-wrap justify-center text-sm font-semibold">
        <Link to="/individual-donor" className="text-pink-600 hover:underline">INDIVIDUAL DONOR</Link>
        <Link to="/csr-donor" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">CSR DONOR</Link>
        <Link to="/" className="text-pink-600 hover:underline">VOLUNTEERING EVENT</Link>
        <Link to="/research" className="text-pink-600 hover:underline">DONATE FOR RESEARCH</Link>
        <Link to="/csr-requirement" className="text-pink-600 hover:underline">CSR REQUIREMENT</Link>
        <Link to="/ngo-partners" className="text-pink-600 hover:underline">NGO PARTNERS</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
