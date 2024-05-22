import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

function SongScreen( {song, updateScore} ) {
    const location = useLocation();
    const { title, artist, img, score } = location.state || song;
    const songTitle = title;
    const navigate = useNavigate();

    function handleClick(value, songTitle, song) {
        updateScore(value, songTitle, song);
        navigate("/ScoreChanged");
    }

    
    return (
        <div>
            <header>
                <div className="container">
                    <h1>SoundScore</h1>
                </div>
            </header>  
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-4 cover">
                            <img src={ img } alt="{title}" className="cover"></img>
                        </div>
                        <div className="col-8 title">
                            <h2>{ title }</h2>                           
                            <h3>{ artist }</h3>
                        </div>            
                    </div>
                    <div className="row">
                        <h2>Score This Song!</h2>
                        <div id="soundscores">
                        <div>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(1, songTitle, song)}>1</button>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(2, songTitle, song)}>2</button>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(3, songTitle, song)}>3</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(4, songTitle, song)}>4</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(5, songTitle, song)}>5</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(6, songTitle, song)}>6</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(7, songTitle, song)}>7</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(8, songTitle, song)}>8</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(9, songTitle, song)}>9</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(10, songTitle, song)}>10</button>
                        </div>
                        </div>
                    </div>
                    <h2>Listen For Yourself</h2>
                        <div className="row">
                        <button type="button" className="btn btn-success listen" onClick={() => window.open('https://open.spotify.com/track/6gs5VDiNhttps://open.spotify.com/?pbBfXHsAj2c9SB?si=2d9c09a201044dd9', '_blank')}>
                            <img src="./spotify.png" alt="Spotify" className="music-icons" />
                            Listen With Spotify
                        </button>
                        </div>
                        <div className="row">
                        <button type="button" className="btn btn-danger listen" onClick={() => window.open('https://music.apple.com/us/album/fahttps://music.apple.com/us/browsede-out-feat-mkla-single/1702821514', '_blank')}>
                            <img src="./applemusic.png" alt="Apple Music" className="music-icons" />
                            Listen With Apple Music
                        </button>
                    </div>
                </div>
                <div className='container'>
                <div className='container center'>
                    <div className='row'>
                        <div className="d-flex col-md-6 col-lg-6 col-xl-6" onClick={() => navigate("/Library")}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <LibraryAddCheckIcon id="icons"/>
                                        </div>
                                        <div className="col-sm">
                                            <h3 className="card-title center">Return to Library</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex col-md-6 col-lg-6 col-xl-6" onClick={() => navigate("/Home")}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <HomeIcon id="icons"/>             
                                        </div>
                                        <div className="col-sm">
                                            <h3 className="card-title center">Return to Home</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>
                    </div>  
                </div>    
            </div>         
            </main>            
        </div>
    );
}

export default SongScreen;
