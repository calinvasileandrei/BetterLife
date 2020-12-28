import React, { useEffect } from 'react'
import app from './FirebaseContext'
import { useState } from '@hookstate/core'
import globalState from '../state/GlobalState'
import { Spin } from 'antd'
import '../style/global.css'

export const AuthProvider = ({ children }: any) => {
  const state = useState(globalState)

  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      state.currentUser.set(user)
      state.pending.set(false)
    })
  }, [])

  if (state.pending.get()) {
    return (
      <div className='fullWidthVw fullHeightVh centerElementH'>
        <Spin />
      </div>
    )
  }

  return <div>{children}</div>
}
