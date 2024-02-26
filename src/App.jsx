import "./App.css";
import image from "./assets/image.png";
import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage-state";
import { Toggle } from "./components/Toggle";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translate from "./texts/data.json";
import { useTranslation } from "react-i18next";
import ClipLoader from 'react-spinners/ClipLoader'
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("eng");
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  }


  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    const lang = localStorage.getItem("language");
    if (lang) {
      i18n.changeLanguage(lang);
      setLanguage(lang);
    }
  }, []);

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <body data-theme={isDark ? "dark" : "light"}>
      {
        isLoading? 
          <ClipLoader className="loader" sizeUnit={"px"} size={180} color={"#123abc"} loading={true} />
          :
          <div className="container">
        <div className="border">
          <div className="borderTopLeft"></div>
          <div className="borderTopRight"></div>
        </div>
        <div className="box">
          <header>
            <ul>
              <li>
                <a href="#">{t("About Us")}</a>
              </li>
              <li>
                <a href="#">{t("Skills")} </a>
              </li>
              <li>
                <a href="#">{t("Projects")} </a>
              </li>
              <li>
                <a href="#">{t("Contact")} </a>
              </li>
            </ul>
            <div className="darklight">
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
              <select value={language} onChange={handleChange}>
                <option>en</option>
                <option>ru</option>
                <option>uz</option>
              </select>
              {/* <i onClick={handleClick} className="fa-solid fa-circle-half-stroke"></i> */}
            </div>
          </header>
          <div className="hero">
            <div className="info">
              <h1>{t("Hi 👋,  I’m Charles, Front-end Developer")} </h1>
              <p>
                {" "}
                {t(
                  "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter."
                )}
              </p>
              <div className="buttons">
                <button className="btn1">{t("HIRE ME")}</button>
                <button className="btn2">{t("SEE MY PROJECTS")}</button>
              </div>
            </div>
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      }
    </body>
  );
}

export default App;
{/* <ClipLoader color="#36d7b7" /> */}