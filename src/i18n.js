import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "About Us": "About Us",
        "Skills": "Skills",
        "Projects": "Projects",
        "contact": "Contact",
        "Hi 👋,  I’m Charles, Front-end Developer": "Hi 👋,  I’m Charles, Front-end Developer",
        "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.": "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.",
        "HIRE ME": "HIRE ME",
        "SEE MY PROJECTS": "SEE MY PROJECTS"
    }
  },
  ru: {
    translation: {
        "About Us": "Обо мне",
        "Skills": "Навыки",
        "Projects": "Проекты",
        "Contact": "Контакты",
        "Hi 👋,  I’m Charles, Front-end Developer": "Здраствуйте 👋, я’м Charles, Front-end Developer",
        "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.": "Я разрабатываю и развиваю эксперименты, которые помогают людям улучшить жизнь с помощью Web и Mobile приложений.�� работаю с FIgma, HTML5, CSS3, JavaScript, React, ReactNative и Flutter.",
        "HIRE ME": "НАЙМИ МЕНЯ",
        "SEE MY PROJECTS": "ПОСМОТРЕТЬ МОИ ПРОЕКТЫ"
    }
  },
  uz: {
    translation: {
        "About Us": "Biz haqida",
        "Skills": "Skilllar",
        "Projects": "Proyectlar",
        "Contact": "Biz haqida",
        "Hi 👋,  I’m Charles, Front-end Developer": "salom 👋, xaridagi front-end developer",
        "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma, HTML5, CSS3, JavaScript, React, ReactNative and Flutter.": "Men veb va mobil ilovalar orqali odamlarning hayotini soddalashtiradigan tajribalarni ishlab chiqaman va ishlab chiqaman. Men FIgma, HTML5, CSS3, JavaScript, React, ReactNative va Flutter bilan ishlayman.",
        "HIRE ME": "MENI KO'RING",
        "SEE MY PROJECTS": "PROYECTLARIMNI KO'RING"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;