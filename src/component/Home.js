import React from 'react';
import Card from './card.js';
import { useNavigate } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { School } from '@mui/icons-material';


function Home ({songs, exampleFriends, updateScore, updateActive, scorelist, playlistArray}) {
    const navigate = useNavigate();
    
    return  (
        <div>
        <header>
            <div className="container">
                <h1>Soundscore</h1>
                <p className="motto">Welcome Back!</p>
            </div>
        </header>
        <section>
            <div className='container'>
                <h2 className="header" onClick={() => navigate('/Library')}>Recently Scored</h2>    
                <Card songs={songs} showBanner={false} updateScore={updateScore} updateActive={updateActive} showScore={true} />
            </div>
            <div className='container'>
                <h2 className="header" onClick={() => navigate('/friend-activity')}>Friend Activity</h2>
                <Card songs={exampleFriends} showBanner={true} updateScore={updateScore} updateActive={updateActive} showScore={true}/>
          
            </div>
            <div className='container'>
                <h2 className="header" onClick={() => navigate('/UniActivity')}>Popular On Campus</h2>
                <div className='row'>
                    <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/UniActivity")}>
                        <div className="card mb-4 short">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-sm-auto col-xl-12">
                                        <School id="icons"/>                 
                                    </div>
                                    <div className="col-sm">
                                        <h3 className="card-title center">University Activity</h3>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/TopTen")}>
                        <div className="card mb-4 short">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-sm-auto col-xl-12">
                                        <TrendingUpIcon id="icons"/>                 
                                    </div>
                                    <div className="col-sm">
                                        <h3 className="card-title center">Trending</h3>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>                    
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h2 className="header" onClick={() => navigate("/Library")}>Library</h2>
                    <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/Library")}>
                        <div className="card mb-4 short">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-sm-auto col-xl-12">
                                        {<LibraryMusicIcon id="icons"/>}
                                    </div>
                                    <div className="col-sm">
                                        <h3 className="card-title center">Your Library</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
            <div className="container">
                <h2>About Us</h2>
                <p>SoundScore aims to connect individuals with similar music taste and build community among music enthusiants. With our innovative ranking system and grouping by university, individuals are able to discover new artists nearby, chat with peers around them, and realize trends of new music!</p>
            </div>
        </section>
        </div>
    );
}

export default Home