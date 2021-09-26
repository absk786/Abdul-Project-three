import './App.css';
import React from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from '@apollo/client'
import {setContext} from "@apollo/client/link/context"
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import NoMatch from './pages/Nomatch'
import Signup from './pages/SignUp'
import Nav from './components/Nav'
import Success from './pages/Success'
import OrderHistory from './pages/OrderHistory'
import {StoreProvider} from './utils/GlobalState'

const httpLink = createHttpLink({
  uri:'/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav/>
          <Switch>
          <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
