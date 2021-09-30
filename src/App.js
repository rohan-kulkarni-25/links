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
      <Links
        name="STOP-WATCH"
        link="http://stopwatch-eight.vercel.app/"
      ></Links>
      <Links
        name="SHADE-GENERATOR"
        link="http://stopwatch-eight.vercel.app/"
      ></Links>{" "}
    </div>
  );
}

export default App;
