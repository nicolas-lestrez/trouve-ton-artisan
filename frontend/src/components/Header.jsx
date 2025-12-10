import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchValue(params.get("search") || "");
  }, [location.search]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const term = searchValue.trim();
    const params = new URLSearchParams();

    if (term) {
      params.set("search", term);
    }

    const searchString = params.toString();
    navigate(`/artisans${searchString ? `?${searchString}` : ""}`);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo cliquable vers la home */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/Logo.webp"
            alt="Trouve ton artisan"
            className="site-logo"
          />
        </Link>

        {/* Bouton burger mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Afficher le menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <nav
          className="collapse navbar-collapse flex-lg-column align-items-lg-end"
          id="mainNavbar"
        >
          <div className="header-search w-100 mb-3 mb-lg-2">
            <form className="header-search-form" onSubmit={handleSearchSubmit} role="search">
              <div className="header-search-input-wrapper">
                <input
                  id="header-search-input"
                  type="search"
                  className="header-search-input"
                  placeholder="Nom, spécialité, ville..."
                  aria-label="Rechercher un artisan"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="header-search-icon"
                  aria-label="Lancer la recherche"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M15.5 15.5L20 20"
                      stroke="#0074c7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="#0074c7"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/artisans?categorie=Bâtiment"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Bâtiment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/artisans?categorie=Services"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/artisans?categorie=Fabrication"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Fabrication
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/artisans?categorie=Alimentation"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Alimentation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
