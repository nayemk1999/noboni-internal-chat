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
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path='/:id'>
            <Content></Content>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
