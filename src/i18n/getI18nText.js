import enLang from "@/i18n/en.json";
import esLang from "@/i18n/es.json";

const getI18nText = (text, es) => {
  const str = es ? esLang[text] ?? text : enLang[text] ?? text;
  return str;
};

export default getI18nText;
