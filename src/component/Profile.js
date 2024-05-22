import React from 'react';
import ScorelistCard from './ScorelistCard.js';

function Profile({ scorelist, playlistArray }) {
  return (
    <div>
      <header>
        <div className="container">
          <h1>SoundScore</h1>
          <p className="motto">Profile</p>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="profile-container">
            <div className="profile-details">
              <div>
                <h2><strong>Username:</strong> <u>User20201</u></h2>
                <h2><strong>School:</strong> <u>University of Washington</u></h2>
                <h2><strong>Followers:</strong> <u>30</u></h2>
              </div>
              <img src="stock-profile.jpeg" alt="profile" className="profile-image"></img>
            </div>
          </div>




          <section id="Scorelists" style={{ marginTop: '40px' }}>
          <h2><strong>Your ScoreLists:</strong></h2>
            <div className="container">
              <div className="scorelists-container">
                <div className="white-box">
                  <ScorelistCard scorelist={scorelist} playlistArray={playlistArray} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;
