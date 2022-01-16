import React from 'react'
import UserDetail from 'components/UserDetail'
import SignUp from 'components/SignUp'

export default function UserDetailContainer({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? <UserDetail /> : <SignUp />}
    </>
  )
}
