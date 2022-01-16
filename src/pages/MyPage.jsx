import React from 'react'
import Gnb from 'components/Gnb';
import UserDetailContainer from 'containers/UserDetailContainer';

export default function MyPage({isLoggedIn}) {
  return (
    <>
      <Gnb />
      <UserDetailContainer isLoggedIn={isLoggedIn} />
    </>
  )
}