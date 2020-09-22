import React, { createContext, useState } from 'react';
import logo from './Logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import News from './Components/News/News';
import Login from './Components/Login/Login';
import NotMatch from './Components/NotMatch/NotMatch';
import Booking from './Components/Booking/Booking';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [signOutUser, setSignOutUser] = useState({});
  return (
    <UserContext.Provider value={([loggedInUser, setLoggedInUser],[signOutUser, setSignOutUser])}>
      <div className="homeBg">
        <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/news">
              <News/>
            </Route>
            <Route path="/destination">
              <Destination/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/booking/:id">
              <Booking/>
            </Route>
            <Route path="*">
              <NotMatch/>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
