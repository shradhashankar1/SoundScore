import React from 'react';
import Table from './Table.js';
import { useNavigate, useLocation } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic.js';



function ScorelistScreen({updateActive, scorelist, playlistArray}) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <header>
                <div className="container">
                <h1>Soundscore</h1>
                <p className="motto"></p>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="row">
                        <h2>Scorelist: {location.state.listName}</h2>
                        <Table songs={location.state.toDisplay} className="" updateActive={updateActive} addPlaylist={false} addScore={false} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/Scorelists", { state: {scorelist, playlistArray} })}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <QueueMusicIcon id="icons"/>             
                                        </div>
                                        <div className="col-sm">
                                            <h3 className="card-title center">ScoreLists</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>                    
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
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ScorelistScreen;