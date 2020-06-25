import React from 'react';
import './App.css';
import AddFriend from './add';
import FriendList from './list';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={FriendList} />
          <Route exact path="/add" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
