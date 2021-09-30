import React from 'react'
import './Intro.css'
import img from '../socialLogos/myimg.png'

export default function Intro() {
  return (
    <div className="introbox">
      <img className="logo" role="img" src={img} alt="" />
      <p className="name" role="article">Rohan Kulkarni</p>
      <p className="introdesc" role="article" >Web Lead at GDSC-SITS,Learning Web-Development,Exploring Open Source </p>
    </div>
  )
}
