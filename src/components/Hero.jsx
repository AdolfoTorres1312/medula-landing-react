import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero py-5 py-lg-6">
      <div className="container-xl">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <h1 className="hero-title mb-3">
              <span>{t("hero_l1").text}</span><br />
              <span className="nowrap">{t("hero_l2").text}</span>
            </h1>

            <p className="hero-sub mb-4">
              <span dangerouslySetInnerHTML={t("hero_sub_l1", { html: true })} />
              <br />
              <span dangerouslySetInnerHTML={t("hero_sub_l2", { html: true })} />
            </p>

            {/* Botón INGRESAR arriba (hero) */}
            <a href="https://TU-URL-DE-LOGIN.com" className="btn-grad btn-xl" rel="noopener">
              {t("login").text}
            </a>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img
  src={new URL('hero.png', import.meta.env.BASE_URL).href}
  alt="Profesional de la salud atiende a paciente frente al computador"
  className="hero-illustration img-fluid"
/>
          </div>
        </div>
      </div>
    </section>
  );
}
