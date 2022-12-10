import React from 'react'
import './Links.css'

export default function Links(props) {

  const { link, name } = props;

  return (
    <div className="linkbox">
      <a href={link} rel="noreferrer" target="_blank">
        {name}
      </a>
    </div>
  );
}
