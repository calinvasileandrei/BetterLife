import React from 'react'
import { Redirect } from 'react-router'

export const IndexPage = ({ history }: any) => {
  return (
    <div>
      <h1>HELLO THERE</h1>
      <a onClick={() => history.push('/signin')}>Signin</a> <br />
      <a onClick={() => history.push('/signup')}>Signup</a>
    </div>
  )
}
