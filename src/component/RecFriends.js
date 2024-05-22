import React, { useState } from 'react';


const exampleFriends = [
  { username: 'shradha', img: "Stock profile image.jpeg", location: "University of Washington" },
  { username: 'andy', img: "Stock profile image.jpeg", location: "University of Washington" },
  { username: 'brandon', img: "Stock profile image.jpeg", location: "University of Washington" },
  { username: 'daniel', img: "Stock profile image.jpeg", location: "University of Washington" },
];

function RecFriends() {
  const [addedFriends, setAddedFriends] = useState([]);

  const handleAddClick = (username) => {    
    setAddedFriends((prevAddedFriends) => [...prevAddedFriends, username]);
  };

  const isFriendAdded = (username) => addedFriends.includes(username);

  return (
    <div className="container">
      <div className="row">
        <h2>Recommended Friends</h2>
        {exampleFriends.map((friend, index) => (
          <div key={index} className="d-flex col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img className="pb-3" src="placeholder.jpg" alt={`${friend.username} - ${friend.user}`} />
                  </div>
                  <div className="col-sm">
                    <h3 className="card-title">{friend.username} </h3>
                    <button
                      className={`btn ${isFriendAdded(friend.username) ? 'btn-secondary' : 'btn-success'}`}
                      onClick={() => handleAddClick(friend.username)}
                      disabled={isFriendAdded(friend.username)}
                    >
                      {isFriendAdded(friend.username) ? 'Added' : 'Add'}
                    </button>
                    {/* <p className="card-text">Location: {friend.location}</p> */}
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bottom-banner">{friend.location}</li>
              </ul> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecFriends;
