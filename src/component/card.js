import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card({songs, showBanner, updateActive, showScore}) {
  const navigate = useNavigate();
  const newSongs = songs && Array.isArray(songs) ? songs : [];
  const recentFour = newSongs.slice(0,4);

  const handleClick = (song) => {
    updateActive(song);
    navigate('/SongScreen', { state: song });
  };
  
  return (    
    <div className="container">
      <div className="row">
        {recentFour.map((song, index) => (
          <div key={index} className="d-flex col-sm-6 col-md-6 col-lg-6 col-xl-3" onClick={() => {handleClick(song)}} >
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img className="pb-3" src={song.img} alt={`${song.title} - ${song.artist}`} />
                  </div>
                  <div className="col-sm">
                    <h3 className="card-title">{song.title} - {song.artist}</h3>
                    {showScore && (
                      <p className="card-text">Soundscore: {song.score}</p>
                    )}
                  </div>
                </div>
              </div>
              {showBanner && (
              <ul className="list-group list-group-flush">
                <li className="list-group-item bottom-banner">Recently Scored by a Friend!</li>
              </ul>               
              )}
            </div>
          </div>   
        ))}
      </div>
    </div>
  );
}

export default Card;
