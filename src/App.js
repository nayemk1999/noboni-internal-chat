import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import LoginPage from './components/Login/Login';
import Content from './components/Home/Content';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useStateValue } from './Redux/StateProvider';
function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path='/chatpage'>
            <Content/>
          </PrivateRoute>
           <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/:id'>
            <Content></Content>
          </PrivateRoute> 
        </Switch>
      </Router>
  );
}

export default App;
