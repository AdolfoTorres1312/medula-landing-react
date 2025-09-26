import { useLang } from "../context/LangContext";

export default function Header() {
  const { lang, setLang, t } = useLang();

  const handleLang = (lng) => (e) => {
    e.preventDefault();
    setLang(lng);
  };

  const BASE = import.meta.env.BASE_URL; // ej: "/medula-landing-react/"

  return (
    <header className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container-xl align-items-center">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={`${BASE}medula_largo.png`} alt="MEDULA" className="logo-lg" />
          <span className="visually-hidden">MEDULA</span>
        </a>

        {/* Nav (desktop) */}
        <nav className="ms-auto d-none d-lg-flex align-items-center">
          <ul className="navbar-nav me-3 gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#faq">{t("help").text}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">{t("contact").text}</a>
            </li>
          </ul>

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
                <a className={`dropdown-item ${lang === "es" ? "active" : ""}`} href="#" onClick={handleLang("es")}>
                  ES — Español
                </a>
              </li>
              <li>
                <a className={`dropdown-item ${lang === "en" ? "active" : ""}`} href="#" onClick={handleLang("en")}>
                  EN — English
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Menú móvil simple */}
        <div className="dropdown ms-auto d-lg-none">
          <button className="btn btn-outline-primary" data-bs-toggle="dropdown" aria-label="Abrir menú">☰</button>
          <ul className="dropdown-menu dropdown-menu-end shadow menu-pop">
            <li><a className="dropdown-item py-2 fw-700" href="#faq">{t("help").text}</a></li>
            <li><a className="dropdown-item py-2 fw-700" href="#contacto">{t("contact").text}</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li className="px-3 pt-1 pb-2">
              <div className="small text-muted mb-1 fw-700">{t("language").text}</div>
              <div className="list-group list-group-sm">
                <a href="#" className={`list-group-item list-group-item-action ${lang === "es" ? "active" : ""}`} onClick={handleLang("es")}>ES — Español</a>
                <a href="#" className={`list-group-item list-group-item-action ${lang === "en" ? "active" : ""}`} onClick={handleLang("en")}>EN — English</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
