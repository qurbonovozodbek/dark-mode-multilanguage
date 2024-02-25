import './App.css'
import image from './assets/image.png';
import React, { useState, useEffect } from "react";
import useLocalStorage from 'use-local-storage-state'
import { Toggle } from "./components/Toggle";
import  translate  from "./texts/data.json";


function App() {
  const [language, setLanguage] = useState("eng")
  const [content, setContent] = useState({})

  useEffect(() => {
    if(language == "eng"){
      setContent(translate.eng)
    } else if(language == "rus") {
      setContent(translate.rus)
    } else if(language == "uzb") {
      setContent(translate.uzb)
    }
  })


  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <body data-theme={isDark ? "dark" : "light"}>
     <div className="container">
      <div className="border">
        <div className="borderTopLeft"></div>
        <div className="borderTopRight"></div>
      </div>
      <div className="box">
        <header>
          <ul>
            <li><a href="#">{content.about}</a></li>
            <li><a href="#">{content.skills} </a></li>
            <li><a href="#">{content.projects} </a></li>
            <li><a href="#">{content.contact} </a></li>
          </ul>
          <div className="darklight">
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
          <select value={language} onChange={(e) => {setLanguage(e.target.value)}}>
            <option>eng</option>
            <option>rus</option>
            <option>uzb</option>
          </select>
          {/* <i onClick={handleClick} className="fa-solid fa-circle-half-stroke"></i> */}
          </div>
        </header>
        <div className="hero">
          <div className="info">
            <h1>{content.greet} </h1>
                <p> {content.info}
                </p>
                <div className="buttons">
                  <button className='btn1'>{content.btn1}</button>
                  <button className='btn2'>{content.btn2}</button>
                </div>
          </div>
          <div className="img">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
     </div>
    </body>
  )
}

export default App
