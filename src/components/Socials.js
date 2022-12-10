import React from 'react'
import './Socials.css'

import github from '../socialLogos/github.png'
import twitter from '../socialLogos/twitter.png'
import linkedin from '../socialLogos/linkedin.png'
import instagram from '../socialLogos/instagram.png'


export default function Socials() {
  return (
    <div className="linkboxSocial" aria-checked="true">
      <a
        href="https://www.linkedin.com/in/rohan-k-2502/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={linkedin} alt="linkedIn Logo" />
      </a>
      <a href="https://twitter.com/rohan_2502" rel="noreferrer" target="_blank">
        <img src={twitter} alt="Twitter Logo" />
      </a>
      <a
        href="https://github.com/rohan-kulkarni-25"
        rel="noreferrer"
        target="_blank"
      >
        <img src={github} alt="Github Logo" />
      </a>
      <a
        href="https://www.instagram.com/dev.rohankulkarni/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={instagram} alt="instagram Logo" />
      </a>
    </div>
  );
}
