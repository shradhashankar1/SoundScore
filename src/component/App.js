import React, { useState }  from 'react';
import Nav from './Navigation.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import FriendActivity from './friend-activity.js';
import Library from './Library.js';
import UniActivity from './UniActivity.js';
import Stats from './Stats.js';
import Home from './Home.js';
import AddSong from './AddSong.js';
import Scorelists from './Scorelists.js';
import ScorelistScreen from './Scorelist-Screen.js';
import NewScoreLists from './NewScoreLists';
import TopTen from './TopTen.js';
import UW from './UW.js';
import SongScreen from './SongScreen.js';
import Profile from './Profile.js';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SongAdded from './SongAdded.js';
import ScoreChanged from './ScoreChanged.js'
import AddPlaylistScreen from './AddPlaylistScreen.js';
import { getDatabase, onValue, ref, set as firebaseSet, push as firebasePush } from 'firebase/database';


function App({EXAMPLE_SONGS, active_song, exampleFriends, topFourUW, cuBoulder, waState, scorelist, playlistArray}) {
    const [songs, setSongs] = useState(EXAMPLE_SONGS);
    const [active, setActive] = useState(active_song);
    const [playlist, setPlaylist] = useState();
    const [addPlaylist, setAddPlaylist] = useState();

    const updateAddPlaylist = (newPlaylist) => {
      setAddPlaylist(newPlaylist);
      scorelist.push({scorelist: newPlaylist});
      playlistArray.push([]);
    }

    const updateScorelist = (playlist) => {
      setPlaylist(playlist);
      const addedSong = active;
      const listIndex = scorelist.findIndex((scorelistName) => scorelistName.scorelist === playlist);
      const scorelistSongs = playlistArray[listIndex];
      scorelistSongs.unshift(addedSong);

      playlistArray[listIndex] = scorelistSongs;
    }

    const addSong = (newSong) => {
      setSongs([newSong, ...songs]);
    }

    const updateActive = (song) => {
      setActive(song);
    }

    const updateScore = (value, songTitle, song) => {
      setActive({ ...active, score: value + "/10" });

      const songIndex = songs.findIndex((song) => song.title.trim() === songTitle);
      let updatedSongs = [...songs];
      if (songIndex !== -1) {
        const updatedSong = { ...updatedSongs[songIndex], score: value + "/10"};
        updatedSongs.splice(songIndex, 1);
        updatedSongs.unshift(updatedSong);

      } else {
        const newSong = {
          title: song.title,
          artist: song.artist,
          img: song.img,
          score: value + "/10",
        }
        updatedSongs.unshift(newSong);

      }
      setSongs((prevSongs) => [...updatedSongs]); 
    };
  
    return (
      <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home songs={songs} exampleFriends={exampleFriends} updateScore={updateScore} updateActive={updateActive} scorelist={scorelist} playlistArray={playlistArray } />} />
        <Route path="/Home" element={<Home songs={songs} exampleFriends={exampleFriends} updateScore={updateScore} updateActive={updateActive} scorelist={scorelist} playlistArray={playlistArray } /> } />
        <Route path="/friend-activity" element={<FriendActivity exampleFriends={exampleFriends} updateActive={updateActive}/>} /> 
        <Route path="/Library" element={<Library songs={songs} updateActive={updateActive} /> } />
        <Route path="/UniActivity" element={<UniActivity topFourUW={topFourUW} cuBoulder={cuBoulder} waState={waState} updateActive={updateActive}/> } /> 
        <Route path="/Stats" element={<Stats songs={songs} active_song={active} updateActive={updateActive} /> } />
        <Route path="/AddSong" element={<AddSong EXAMPLE_SONGS={EXAMPLE_SONGS} addSong={addSong} /> } />
        <Route path="/TopTen" element={<TopTen updateActive={updateActive} /> } />
        <Route path="/UW" element={<UW updateActive={updateActive} /> } />
        <Route path="/Scorelists" element={<Scorelists scorelist={scorelist} playlistArray={playlistArray} /> } />
        <Route path="/Profile" element={<Profile scorelist={scorelist} playlistArray={playlistArray}/>}/>
        <Route path="/ScoreListScreen" element={<ScorelistScreen updateActive={updateActive} score={scorelist} playlistArray={playlistArray}/> } />
        <Route path="/SongScreen" element={<SongScreen song={active} updateScore={updateScore} /> } />
        <Route path="/SongAdded" element={<SongAdded />} />
        <Route path="/ScoreChanged" element={<ScoreChanged />} />
        <Route path="/NewScoreLists" element={<NewScoreLists scorelist={scorelist} updateScorelist = {updateScorelist} />} />
        <Route path="/AddPlaylistScreen" element={<AddPlaylistScreen updateAddPlaylist={updateAddPlaylist} scorelist={scorelist} playlistArray={playlistArray} /> } />
        <Route path="*" element={<Navigate to="/home" />} /> 
      </Routes>

        <main>

        </main>

        <footer>
          <div className="container">
            <p><a href="mailto:email@SoundScore.uw.edu"> <EmailIcon /> support@SoundScore.com</a></p>
            <p><a href="tel:123-456-7890"> <LocalPhoneIcon /> 1234567890</a></p>
            <p>&copy; SoundScore 2023</p>  
          </div>     
        </footer>
        </div>
    )
}

export default App;
