import React from 'react';
import { useNavigate } from 'react-router-dom';


function ScorelistCard({ scorelist, playlistArray }) {
  const navigate = useNavigate();

  const handleClick = (list) => {
    const index = scorelist.findIndex((scorelistName) => scorelistName.scorelist === list);
    const displaySongs = playlistArray[index];
    navigate("/ScorelistScreen", { state: {listName: list, toDisplay: displaySongs} })
  };
  
  return (    
    <div className="container">
      <div className="row">
        {scorelist.map((name, index) => (
          <div key={index} className="d-flex col-sm-6 col-md-6 col-lg-6 col-xl-3" onClick={() => {handleClick(name.scorelist)}} >
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img className="pb-3" src="playlist.png" alt={ name.scorelist } />
                  </div>
                  <div className="col-sm">
                    <h3 className="card-title">{ name.scorelist }</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        ))}
      </div>
    </div>
  );
}

export default ScorelistCard;
