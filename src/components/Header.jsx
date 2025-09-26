// src/components/Header.jsx
import { useLang } from "../context/LangContext";

export default function Header() {
  const { lang, setLang, t } = useLang();

  // Base para rutas en GitHub Pages (ej: /medula-landing-react/)
  const base = import.meta.env.BASE_URL || "/";

  // URL real de login (cámbiala si corresponde)
  const LOGIN_URL = "https://app.medula.cl";

  const handleLang = (lng) => (e) => {
    e.preventDefault();
    setLang(lng);
  };

  return (
    <header className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container-xl align-items-center">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={`${base}assets/img/medula_largo.png`} alt="MEDULA" className="logo-lg" />
          <span className="visually-hidden">MEDULA</span>
        </a>

        {/* Nav (desktop) */}
        <nav className="ms-auto d-none d-lg-flex align-items-center">
          <ul className="navbar-nav me-3 gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#faq">{t("help").text}</a>
            </li>
          </ul>

          {/* Botón Ingresar (nuevo) */}
          <a href={LOGIN_URL} className="btn-grad fw-700 rounded-3 me-3">
            {t("login").text}
          </a>

          {/* Idioma (desktop) */}
          <div className="dropdown">
            <button
              className="btn lang-btn fw-700 rounded-3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-1">🌐</span> <span>{lang.toUpperCase()}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow">
              <li>
                <a
                  className={`dropdown-item ${lang === "es" ? "active" : ""}`}
                  href="#"
                  onClick={handleLang("es")}
                >
                  ES — Español
                </a>
              </li>
              <li>
                <a
                  className={`dropdown-item ${lang === "en" ? "active" : ""}`}
                  href="#"
                  onClick={handleLang("en")}
                >
                  EN — English
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Menú móvil */}
        <div className="dropdown ms-auto d-lg-none">
          <button className="btn btn-outline-primary" data-bs-toggle="dropdown" aria-label="Abrir menú">☰</button>
          <ul className="dropdown-menu dropdown-menu-end shadow menu-pop">
            <li><a className="dropdown-item py-2 fw-700" href="#faq">{t("help").text}</a></li>

            {/* Botón Ingresar (móvil) */}
            <li className="px-3 py-2">
              <a href={LOGIN_URL} className="btn-grad w-100 fw-700 rounded-3 text-center">
                {t("login").text}
              </a>
            </li>

            <li><hr className="dropdown-divider" /></li>
            <li className="px-3 pt-1 pb-2">
              <div className="small text-muted mb-1 fw-700">{t("language").text}</div>
              <div className="list-group list-group-sm">
                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${lang === "es" ? "active" : ""}`}
                  onClick={handleLang("es")}
                >
                  ES — Español
                </a>
                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${lang === "en" ? "active" : ""}`}
                  onClick={handleLang("en")}
                >
                  EN — English
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
