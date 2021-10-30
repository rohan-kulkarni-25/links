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
        name="GOOGLE SIGN-IN"
        link="https://signinwithgoogleapp.vercel.app/"
      ></Links>
      <Links
        name="WIND-MILL"
        link="https://windmill-beryl.vercel.app/"
      ></Links>
      <Links
        name="STOP-WATCH"
        link="http://stopwatch-eight.vercel.app/"
      ></Links>
      <Links
        name="SHADE-GENERATOR"
        link="https://shadegenerator.vercel.app"
      ></Links>
          <Links
        name="TIC-TAC-TOE"
        link="https://tic-tac-toe-pied.vercel.app"
      ></Links>

    </div>
  );
}

export default App;
