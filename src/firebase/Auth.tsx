import React, { useEffect, useState } from 'react'
import app from './FirebaseContext'

export const AuthContext = React.createContext<any>(null)

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser]: any = useState<any>(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
