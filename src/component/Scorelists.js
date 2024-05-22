import React from 'react';
import { useNavigate } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import ScorelistCard from './ScorelistCard.js'


function Scorelists({ scorelist, playlistArray}) {
    const navigate = useNavigate();

  return (
    <div>
        <header>
            <div className="container">
                <h1>SoundScore</h1>
            </div>
        </header>
        <main>
            <section id="Scorelists">
                <div className="container">
                    <div className="row">
                        <button className="btn btn-success" onClick={() => navigate("/AddSong")} >Score a Song</button>
                        <h2>Your ScoreLists</h2>
                        <ScorelistCard scorelist={scorelist} playlistArray={playlistArray} />
                    </div>
                </div>
           </section>
            <section id ="library">
                <div className="container">
                    <div className="row">
                        <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/Library")}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                        <LibraryMusicIcon id="icons"/>
                                        </div>
                                            <div className="col-sm">
                                            <h3 className="card-title center">Your Library</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/AddPlaylistScreen")}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                        <AddIcon id="icons"/>
                                        </div>
                                        <div className="col-sm">
                                            <h3 onClick={() => navigate("/AddPlaylistScreen")} className="card-title center">Add New ScoreList</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>


                    </div>
                </div>
            </section>
                    
        </main>          
    </div>
  );
}

export default Scorelists;