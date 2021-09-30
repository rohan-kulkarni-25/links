import React from 'react'
import './Links.css'

export default function Links(props) {

  const { link, name } = props;

  return (
    <div className="linkbox">
      <p>{name}</p>
      <a href={link} rel="noreferrer" target="_blank">View</a>
    </div>

  )
}
