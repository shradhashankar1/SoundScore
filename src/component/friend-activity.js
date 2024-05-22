import React from 'react';
import RecFriends from './RecFriends.js';
import Card from './card.js'
import { useNavigate } from 'react-router-dom';

function FriendActivity({ exampleFriends, updateActive }) {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="container">
          <h1>Soundscore</h1>
          <p className="motto">Friend Activity</p>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <h2 className="header" onClick={() => navigate('/friend-activity')}>Friend Activity</h2>
            <Card songs={exampleFriends} showBanner={true} updateActive={updateActive} showScore={true}/>
            <RecFriends />
          </div>
        </div>
      </main>
    </div>
  );
}

export default FriendActivity;