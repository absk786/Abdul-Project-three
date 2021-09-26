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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
