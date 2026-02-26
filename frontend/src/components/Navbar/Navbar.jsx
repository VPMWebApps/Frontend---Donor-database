import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 font-semibold text-sm
   ${isActive 
     ? "text-[#D4AF37]" 
     : "text-white hover:text-[#D4AF37] hover:underline"}`;

const Navbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role") || "guest");
  const [showLogin, setShowLogin] = useState(false);

  const isGuest = role === "guest";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (email === "admin@vpm.com") {
      setRole("admin");
    } else if (email === "staff@vpm.com") {
      setRole("staff");
    } else if (email === "management@vpm.com") {
      setRole("management");
    } else {
      alert("Invalid credentials");
      return;
    }

    setRole("admin");
    setShowLogin(false);
    localStorage.setItem("role", "admin");
  };

  const handleLogout = () => {
    setRole("guest");
    localStorage.removeItem("role"); 
    navigate("/", { replace: true });
  };

  return (
    <nav className="bg-[#1E2A38] sticky top-0 z-50 shadow-md py-4 px-8 flex flex-col items-center relative">

      <div className="grid grid-cols-3 items-center w-full px-4 py-3">
        <div></div>

        <h1 className="text-xl font-bold text-center text-white">
          VPM TRUST
        </h1>

        <div className="flex justify-end">
          {isGuest ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#D4AF37] text-[#1E2A38] px-6 py-2 rounded-full hover:bg-[#C49B2F] text-sm cursor-pointer"
            >
              LOGIN
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-[#D4AF37] text-[#1E2A38] px-6 py-2 rounded-full hover:bg-[#C49B2F] text-sm cursor-pointer"
            >
              LOGOUT
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-6 flex-wrap justify-center"> 
        <NavLink to="/" end className={linkClass}>VOLUNTEERING EVENT</NavLink>
        <NavLink to="/research" className={linkClass}>DONATE FOR RESEARCH</NavLink>
        <NavLink to="/sponsor-sp" className={linkClass}>SPONSOR STUDENT PROJECT</NavLink>
        <NavLink to="/csr-requirement" className={linkClass}>CSR REQUIREMENT</NavLink>

        {!isGuest && (
          <>
            <NavLink to="/individual-donor" className={linkClass}>INDIVIDUAL DONOR</NavLink>
            <NavLink to="/csr-donor" className={linkClass}>CSR DONOR</NavLink>
            <NavLink to="/ngo-partners" className={linkClass}>NGO PARTNERS</NavLink>
          </>
        )}
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-lg w-80 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#1E2A38]">Login</h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full mb-3 border px-3 py-2 rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full mb-4 border px-3 py-2 rounded"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="text-sm text-[#1E2A38] cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#D4AF37] text-[#1E2A38] px-4 py-2 rounded text-sm hover:bg-[#C49B2F] cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;