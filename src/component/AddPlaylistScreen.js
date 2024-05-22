import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic.js';

function AddPlaylistScreen ({updateAddPlaylist, scorelist, playlistArray}) {
    const navigate = useNavigate();
    const [playlistInput, setPlaylistInput] = useState('');

    const handlePlaylist = (e) => {
      e.preventDefault();
      updateAddPlaylist(playlistInput);
      navigate("/Scorelists");
    }
    
    return(
        <div>
          <div className="container">
            <form onSubmit={handlePlaylist}>
              <h2 className="text-small">Create a new ScoreList!</h2>
              <div>
                <label htmlFor="playlist_name">New ScoreList Name: </label>
                <input
                  onChange={(e) => setPlaylistInput(e.target.value)}                               
                  name="playlist_name"
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
          <div className="container">
            <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/Scorelists", { state: {scorelist, playlistArray} })}>
              <div className="card mb-4 short">
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-sm-auto col-xl-12">
                      <QueueMusicIcon id="icons"/>             
                    </div>
                    <div className="col-sm">
                      <h3 className="card-title center">Return To ScoreLists</h3>
                    </div>
                  </div>
                </div>
              </div>             
            </div>               
          </div>
        </div>

    );
}

export default AddPlaylistScreen;
