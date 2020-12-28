import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../firebase/Auth'

export const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  )
}
