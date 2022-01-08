import React, { Component } from 'react'
import 'components/components.css';
import { useRef } from 'react';

export default function Header() {
  const headerEl = useRef();
  const handleMenuClick = () => {
    headerEl.current.classList.toggle('on')
  }

  return (
    <header className="cp_header" ref={headerEl}>
      <div className="gnb">
        <button onClick={handleMenuClick}><span className="ico_cp ico_menu"></span></button>
      </div>
    </header>
  )
}
