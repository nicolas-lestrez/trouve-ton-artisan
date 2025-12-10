import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto py-5 footer-bg bg-primary text-white">
      <div
        className="
          container
          d-flex flex-column flex-md-row
          justify-content-between
          gap-5
          align-items-center
          text-center text-md-start
        "
      >

        {/* Bloc logo → Home */}
        <div>
          <Link to="/" className="d-inline-block">
            <img
              src="/images/Logo blanc.webp"
              alt="Trouve ton artisan"
              className="footer-logo"
            />
          </Link>
        </div>

        {/* Pages légales */}
        <div>
          <h5 className="footer-title">Pages légales</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <Link to="/mentions-legales" className="footer-link">
                &gt; Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/cgu" className="footer-link">
                &gt; Données Personnelles
              </Link>
            </li>
            <li>
              <Link to="/cgu" className="footer-link">
                &gt; Accessibilités
              </Link>
            </li>
            <li>
              <Link to="/cgu" className="footer-link">
                &gt; Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="mb-2">Nous contacter</h5>

          {/* Adresse vers Google Maps */}
          <p className="mb-2 footer-link">
            <a
              className="d-inline-flex align-items-start text-white text-decoration-none"
              href="https://www.google.com/maps/search/?api=1&query=101%20cours%20Charlemagne%20CS%2020033%2069269%20LYON%20CEDEX%2002%20France"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/map.webp"
                alt=""
                className="me-2 mt-1"
                width="20"
                height="20"
              />
              <span>
                101, cours Charlemagne<br />
                CS 20033<br />
                69269 LYON CEDEX 02<br />
                France
              </span>
            </a>
          </p>

          {/* Téléphone */}
          <p className="mb-0">
            <img
              src="/images/phone.webp"
              alt=""
              className="me-2 mt-1"
              width="25"
              height="25"
            />
            <a
              className="footer-link"
              href="tel:+33426734000"
            >
              +33 (0)4 26 73 40 00
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
