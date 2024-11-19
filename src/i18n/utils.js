const STORAGE_NAME = "PABLOCAZORLA_LANGUAGE";

export const detectBrowserLanguage = (currentLang) => {
  let selectedLanguage = localStorage.getItem(STORAGE_NAME);

  if (!selectedLanguage) {
    const browserLanguagePropertyKeys = [
      "language",
      "browserLanguage",
      "systemLanguage",
      "userLanguage",
    ];

    for (const key of browserLanguagePropertyKeys) {
      if (typeof navigator === "undefined") {
        break;
      }
      if (typeof navigator[key] === "string") {
        selectedLanguage = navigator[key];
        break;
      }
    }

    localStorage.setItem(STORAGE_NAME, selectedLanguage);
  }

  if (currentLang === "en" && selectedLanguage === "es") {
    window.location.href = "/es";
  }

  if (currentLang === "es" && selectedLanguage !== "es") {
    window.location.href = "/";
  }
};

export const navigateToLanguage = (lang) => {
  localStorage.setItem(STORAGE_NAME, lang);
  window.location.href = lang === "es" ? "/es" : "/";
};
