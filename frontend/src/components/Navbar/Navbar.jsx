import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 font-semibold text-sm
   ${isActive 
     ? "text-pink-800 " 
     : "text-pink-600 hover:text-pink-800 hover:underline"}`;

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md py-4 px-8 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-2">VPM TRUST</h1>

      <div className="flex gap-6 flex-wrap justify-center">
        <NavLink to="/individual-donor" className={linkClass}>INDIVIDUAL DONOR</NavLink>
        <NavLink to="/csr-donor" className={linkClass}>CSR DONOR</NavLink>
        <NavLink to="/" end className={linkClass}>VOLUNTEERING EVENT</NavLink>
        <NavLink to="/research" className={linkClass}>DONATE FOR RESEARCH</NavLink>
        <NavLink to="/csr-requirement" className={linkClass}>CSR REQUIREMENT</NavLink>
        <NavLink to="/ngo-partners" className={linkClass}>NGO PARTNERS</NavLink>
        <NavLink to="/sponsor-sp" className={linkClass}>SPONSOR STUDENT PROJECT</NavLink>
        <button className="absolute right-8 top-8 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 text-sm cursor-pointer">
          LOGIN
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
