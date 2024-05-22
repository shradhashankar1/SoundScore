import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

function AddSongForm({addSong}) {
    const navigate = useNavigate();
    const [songInput, setSongInput] = useState('');
    const [artistInput, setArtistInput] = useState('');
    let score = 0;

    const handleSong = (e) => {
        e.preventDefault();

        const newSong = {
            title: songInput,
            artist: artistInput,
            img: "placeholder.jpg",
            score: score + "/10"
        };

        addSong(newSong);
        
        setSongInput('');
        setArtistInput('');

        navigate("/SongAdded");
    }
    
    function handleClick(value) {
        score = value;
    }

    return (
        <>
            <header>
                <div className="container">
                    <h1>SoundScore</h1>
                    <p className="motto">Score a Song!</p>
                </div>
            </header>
            <div className="container">
                <section>
                    <form onSubmit={handleSong}>
                        <h2 className="text-small">Fill out the following details to score a song: </h2>
                        <div>
                            <label>Song Title: </label>
                            <input
                                id="stitle"
                                name="stitle"
                                value={songInput}
                                onChange={(e) => setSongInput(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Artist: </label>
                            <input
                                id="sartist"
                                name="sartist"
                                value={artistInput}
                                onChange={(e) => setArtistInput( e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ssscore" className="scoreform">Score: </label>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(1)}>1</button>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(2)}>2</button>
                            <button type="button" className="btn btn-danger" onClick={() =>handleClick(3)}>3</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(4)}>4</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(5)}>5</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(6)}>6</button>
                            <button type="button" className="btn btn-warning" onClick={() =>handleClick(7)}>7</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(8)}>8</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(9)}>9</button>
                            <button type="button" className="btn btn-success" onClick={() =>handleClick(10)}>10</button>
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default AddSongForm;
