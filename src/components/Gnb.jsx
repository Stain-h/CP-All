import React from 'react'
import { Link } from 'react-router-dom';

export default function Gnb() {
  return (
    <div className="gnb">
      <ul className="list_gnb">
        <li><Link to="/" className="btn_menu"><span className="ico_cp ico_menu"></span></Link></li>
        <li><Link to="/auth" className="gnb_item">MY</Link></li>
        <li><Link to="#" className="gnb_item"></Link></li>
        <li><Link to="#" className="gnb_item"></Link></li>
        <li><Link to="#" className="gnb_item"></Link></li>
      </ul>
    </div>
  )
}