import React, { useEffect, useRef } from "react";
import "./Intro.css";
import banner from "../assets/banner.jpeg";
import profile from "../assets/profile.jpg";

export default function Intro() {

  return (
    <div className="introbox">
      <img src={banner} className="banners" />
      <img className="logo" role="img" src={profile} />
      <p className="name" role="article">
        Rohan Kulkarni
      </p>
      <p className="introdesc" role="article">
        <span>🌻 React Developer Intern @Cloudware Solutions LLC</span>
        <span>
          🌻 A Developer who can build web apps and cross-platform mobile apps
        </span>
        <span>🌻 Organiser @hacktheleague @hackatsits</span>
        <span>🌻 Building @webuildpune</span>
        <span>🌻 Open Source enthusiast</span>
        <span style={{ fontSize: "0.8rem", wordSpacing: "0.2rem" }}>
          Part of multiple communities: FOSSPUNE, MUGPUNE and many more.
        </span>
      </p>
    </div>
  );
}
