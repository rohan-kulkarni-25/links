import "./App.css";
import Intro from "./components/Intro";
import Links from "./components/Links";
import Socials from "./components/Socials";
import React from "react";

function App() {
  return (
    <div className="links">
      <Intro></Intro>
      <Socials></Socials>
      {/* <Links
        name="Register for Hack The League"
        link="https://hacktheleague.com/"
      ></Links>
      <Links
        name="Postman Students Expert Certification"
        link="http://stopwatch-eight.vercel.app/"
      ></Links>
      <Links
        name="Introduction to API by Postman workshop"
        link="https://lu.ma/3zydlnlo"
      ></Links>
      <Links name="We Build Pune" link="https://webuildpune.co"></Links>
      <Links
        name="We Build Pune WhatsApp Group"
        link="https://chat.whatsapp.com/Ea8U7fKUhenCAsdcE4pvwb"
      ></Links> */}
    </div>
  );
}

export default App;
