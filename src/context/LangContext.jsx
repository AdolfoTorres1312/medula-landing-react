// src/context/LangContext.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { I18N, DEFAULT_LANG } from "../i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("medula:lang") || DEFAULT_LANG);

  useEffect(() => {
    localStorage.setItem("medula:lang", lang);
  }, [lang]);

  const t = (key, { html = false } = {}) => {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    const val = dict[key] ?? key;
    return { __html: val, text: val, html };
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
