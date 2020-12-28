import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useState } from '@hookstate/core'
import globalState from '../state/GlobalState'

export const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  const state = useState(globalState)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!state.currentUser.get() ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  )
}
