import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();
  const base = import.meta.env.BASE_URL;

  return (
    <footer id="contacto" className="py-5">
      <div className="container-xl text-center">
        <div className="logos mb-3 d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <a href="https://fonasa.cl" target="_blank" rel="noopener noreferrer">
            <img src={`${base}Logo_de_Fonasa_clean.png`} alt="FONASA" />
          </a>
          <a href="https://www.minsal.cl" target="_blank" rel="noopener noreferrer">
            <img src={`${base}Logo_del_MINSAL_Chile.png`} alt="MINSAL" />
          </a>
        </div>
        <p className="text-muted mb-2">{t("protected").text}</p>
        <a className="fw-bold" href="mailto:contact@medula.cl">contact@medula.cl</a>
      </div>
    </footer>
  );
}
