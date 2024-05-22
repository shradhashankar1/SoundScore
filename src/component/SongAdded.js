import React from 'react';
import { useNavigate } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

function SongAdded() {
    const  navigate = useNavigate();
    return (
        <>
            <header>
                <div className="container">
                <   h1>Soundscore</h1>
                    <p className="motto"></p>
                </div>
            </header>
            <div className='container'>
                <h2 className='center'>Song Succesfully Added To Your Library!</h2>
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
                        <div className="d-flex col-md-6 col-lg-6 col-xl-6" onClick={() => navigate("/AddSong")}>
                            <div className="card mb-4 short">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <LibraryAddIcon id="icons"/>             
                                        </div>
                                        <div className="col-sm">
                                            <h3 className="card-title center">Add Another Song</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>
                    </div>  
                </div>    
            </div>          
        </>
    );
}


export default SongAdded;

