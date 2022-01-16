import React from 'react'
import UserDetail from 'components/UserDetail'

export default function UserDetailContainer({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? '로그인 되었습니다.' : <UserDetail />}
    </>
  )
}
