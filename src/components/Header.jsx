import React, { Component } from 'react'
import 'components/components.css';
import NumberTest from 'components/NumberTest'

export default function Header() {
  const cpHeader = document.querySelector(".cp_header")
  const handleClick = () => {
    cpHeader.classList.toggle('on');
  }

  return (
    <header className="cp_header">
      <div className="gnb">
        <button onClick={handleClick}><span className="ico_cp ico_menu"></span></button>
      </div>
    </header>
  )
}
