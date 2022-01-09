import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  /* ${reset}; */
  /* reset */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0}
  fieldset,img{border:0 none}
  dl,ul,ol,menu,li{list-style:none}
  blockquote, q{quotes: none}
  blockquote:before, blockquote:after,q:before, q:after{content:'';content:none}
  input,select,textarea,button{vertical-align:middle}
  input::-ms-clear{display:none}
  button{border:0 none;background-color:transparent;cursor:pointer}
  body{background:var(--bg-color)}
  body,th,td,input,select,textarea,button{font-size:12px;line-height:1.5;font-family:'NotoSans','Apple SD Gothic Neo',sans-serif;letter-spacing:-0.05em;color:#333} /* color값은 디자인가이드에 맞게사용 */
  button{padding:0}
  a{color:#333;text-decoration:none}
  a:active, a:hover{text-decoration:none}
  a:active{background-color:transparent}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
  img{vertical-align:top}
`

export default GlobalStyles;