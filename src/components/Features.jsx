import { useLang } from "../context/LangContext";

export default function Features() {
  const { t } = useLang();
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-4 py-lg-5">
      <div className="container-xl">
        <div className="row g-3 g-lg-4 justify-content-center">
          <div className="col-6 col-md-6 col-lg-3">
            <article className="feature h-100 text-center">
              <div className="feature-icon">
                <img src={`${base}historial.svg`} alt="Historial" />
              </div>
              <h3 className="feature-title">{t("feat_hist_title").text}</h3>
              <p className="feature-desc">{t("feat_hist_desc").text}</p>
            </article>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <article className="feature h-100 text-center">
              <div className="feature-icon">
                <img src={`${base}medicamentos.svg`} alt="Medicamentos" />
              </div>
              <h3 className="feature-title">{t("feat_med_title").text}</h3>
              <p className="feature-desc">{t("feat_med_desc").text}</p>
            </article>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <article className="feature h-100 text-center">
              <div className="feature-icon">
                <img src={`${base}examenes.svg`} alt="Exámenes" />
              </div>
              <h3 className="feature-title">{t("feat_lab_title").text}</h3>
              <p className="feature-desc">{t("feat_lab_desc").text}</p>
            </article>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <article className="feature h-100 text-center">
              <div className="feature-icon">
                <img src={`${base}calendario.svg`} alt="Recordatorios" />
              </div>
              <h3 className="feature-title">{t("feat_rem_title").text}</h3>
              <p className="feature-desc">{t("feat_rem_desc").text}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
