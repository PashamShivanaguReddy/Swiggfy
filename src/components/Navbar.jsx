import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const authed = Boolean(localStorage.getItem("fd_user"));

  return (
    <header className="nav">
      <div className="navInner">
        <div
          className="brandMark"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/")}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
        >
          SwiggyLite
        </div>

        <nav className="navLinks">
          <NavLink to="/" className={({ isActive }) => `pill ${isActive ? "activePill" : ""}`}>
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) => `pill ${isActive ? "activePill" : ""}`}
          >
            Explore
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `pill ${isActive ? "activePill" : ""}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/auth"
            className={({ isActive }) => `pill ${isActive ? "activePill" : ""}`}
          >
            {authed ? "Profile" : "Login"}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
