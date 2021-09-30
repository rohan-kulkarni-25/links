import React from 'react'
import './Socials.css'

import github from '../socialLogos/github.png'
import twitter from '../socialLogos/twitter.png'
import linkedin from '../socialLogos/linkedin.png'
import instagram from '../socialLogos/instagram.png'


export default function Socials() {
  return (
    <div className="linkboxSocial" aria-checked="true">
      <a href="/" alt="linkedIn Logo" ><img role="img" src={linkedin} alt="" /></a>
      <a href="/" alt="Twitter Logo"><img role="img" src={twitter} alt="" /></a>
      <a href="/" alt="Github Logo"><img role="img" src={github} alt="" /></a>
      <a href="/" alt="instagram Logo"><img role="img" src={instagram} alt="" /></a>
    </div>
  )
}
