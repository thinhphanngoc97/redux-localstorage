import React from 'react';
import './App.css';
import AddFriend from './add';
import FriendList from './list';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <AddFriend />
          </div>
          <div className="col-7">
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
