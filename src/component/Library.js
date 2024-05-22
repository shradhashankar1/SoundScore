import React, { useState, useEffect } from 'react';
import Table from './Table';
import { useNavigate } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';


function Library({ songs, updateActive }) {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedScoreFilter, setSelectedScoreFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueArtists = Array.from(new Set(songs.map((song) => song.artist)));
    setSelectedArtist(''); 
    setArtistOptions(uniqueArtists);
  }, [songs]);

  const setArtistOptions = (artists) => {
    const artistDropdown = document.getElementById('artistFilter');
    artistDropdown.innerHTML = '<option value="">All Artists</option>';
    artists.forEach((artist) => {
      artistDropdown.innerHTML += `<option value="${artist}">${artist}</option>`;
    });
  };

  const applyFilters = () => {
    let filtered = [...songs];

    if (selectedArtist !== '') {
      filtered = filtered.filter((song) => song.artist === selectedArtist);
    }

    if (selectedScoreFilter === 'low-high') {
      filtered = filtered.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
    } else if (selectedScoreFilter === 'high-low') {
      filtered = filtered.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    }

    setFilteredSongs(filtered);
  };

  const handleArtistChange = (event) => {
    const artist = event.target.value;
    setSelectedArtist(artist);
  };

  const handleScoreFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedScoreFilter(filter);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Soundscore</h1>
          <p className="motto">Library</p>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => navigate("/AddSong")}
                className="btn btn-success btn-lg w-100"
              >
                Score a Song
              </button>
            </div>
          </div>
          <h2>Your Library</h2>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="artistFilter" className="form-label">
                Filter by artist:
              </label>
              <select
                id="artistFilter"
                className="form-select"
                value={selectedArtist}
                onChange={handleArtistChange}
              >
                <option value="">All Artists</option>
                {Array.from(new Set(songs.map((song) => song.artist))).map((artist) => (
                  <option key={artist} value={artist}>
                    {artist}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="scoreFilter" className="form-label">
                Filter by Score:
              </label>
              <select
                id="scoreFilter"
                className="form-select"
                value={selectedScoreFilter}
                onChange={handleScoreFilterChange}
              >
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>

            <div className="col-12 mt-3">
              <button className="btn btn-primary" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>

          <Table songs={filteredSongs} className="scores" updateActive={updateActive} addPlaylist={true} addScore={true} />
        </div>

        <div className="container">
          <div className="d-flex col-md-6 col-lg-6 col-xl-3" onClick={() => navigate("/Scorelists")}>
            <div className="card mb-4 short">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <QueueMusicIcon id="icons" />
                  </div>
                  <div className="col-sm">
                    <h3 className="card-title center">ScoreLists</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Library;