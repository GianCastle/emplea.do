import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../../component/layout/Layout'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import AdminBoard from '../../pages/AdminBoard'

import PrivateRoute from '../../router/PrivateRoute'

import { AuthContext } from '../../context/AuthenticationContext'

function App() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <Layout />

        {/* -- ROUTES DEFININITIONS BELOW -- */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={AdminBoard} />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
