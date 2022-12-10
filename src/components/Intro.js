import React from 'react'
import './Intro.css'
import img from '../socialLogos/myimg.png'

export default function Intro() {
  return (
    <div className="introbox">
      <img
        className="logo"
        role="img"
        src="https://i.ibb.co/nqpw11s/IMG-8855-removebg-preview-2.png"
        alt=""
      />
      <p className="name" role="article">
        Rohan Kulkarni
      </p>
      <p className="introdesc" role="article">
        Founder <a href="https://webuildpune.co">@webuildpune community </a>
        <a href="https://twitter.com/HackTheLeague">
          <br></br>Co-organiser @HackTheLeague
        </a>
        <br></br> Full Stack Web & Mobile Developer <br></br>Students Leader
        @postman
      </p>
    </div>
  );
}
