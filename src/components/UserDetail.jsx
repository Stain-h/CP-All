import React from 'react'

export default function UserDetail() {
  return (
    <article className="content cont_detail">
     <div className="wrap_profile">
        <div className="img_wrap"><img src="http://placehold.it/300x200" alt="profile"/></div>
        <strong className="tit_profile">이름입니다.</strong>
        <p className="txt_profile">email 입니다. </p>
     </div>
     <div className="wrap_myspace">
       <strong className="tit_myspace">My Space</strong>
       <ul className="list_myspace">
         <li><span className="num_g">1</span>마이스페이스 목록입니다.</li>
         <li><span className="num_g">2</span>마이스페이스 목록입니다.</li>
         <li><span className="num_g">3</span>마이스페이스 목록입니다.</li>
         <li><span className="num_g">4</span>마이스페이스 목록입니다.</li>
       </ul>
     </div>
    </article>
  )
}
