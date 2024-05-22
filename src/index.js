import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8i5ZE9Dw_opgBeYwxmVFDL9f3InYDZiI",
  authDomain: "project-danielz6.firebaseapp.com",
  databaseURL: "https://project-danielz6-default-rtdb.firebaseio.com",
  projectId: "project-danielz6",
  storageBucket: "project-danielz6.appspot.com",
  messagingSenderId: "856045486371",
  appId: "1:856045486371:web:6372d3611299cd8935cc96"
};

// Initialize Firebase
initializeApp(firebaseConfig);


let EXAMPLE_SONGS = [
  { title: 'Dashstar', artist: "Knock2", img: "dashstar.jpeg", score: "10/10"},
  { title: 'Down Low', artist: 'Dombresky', img: 'down-low.jpeg', score: '6/10'},
  { title: 'Make Me Feel', artist: 'John Summit', img: 'make-me-feel.jpeg', score: '7/10'},
  { title: 'Temptation', artist: 'Sidepiece', img: 'temptation.jpeg', score: '8/10'},
  { title: 'Forget It', artist: 'Matroda', img: 'forget-it.jpeg', score: '9/10'},
  { title: 'Pepas', artist: 'Farruko', img: 'pepas.jpeg', score: '8/10'},
  { title: 'San Francisco', artist: 'Dom Dolla', img: 'san-francisco.jpeg', score: '8/10'},
  { title: 'Losing It', artist: 'Fisher', img: 'losing-it.jpeg', score: '9.5/10'}

];

let active_song = [
  {title: 'Dashstar', artist: 'Knock2', img: "dashstar.jpeg", score: "10/10"}
];

const exampleFriends = [
  { title:'Nonstop', artist: 'Drake', img: "download.jpeg", score: "9/10", user: "andy206"},
  { title:'Promiscuous', artist: 'Nelly Furtado ft. Timbaland', img: "Nelly.jpeg", score: "10/10", user: "Dom Dolla"},
  { title:'Work', artist:'Rihanna ft. Drake', img: "work.jpeg", score: "9/10", user:"daniel123"},
  { title:'Blinding Lights', artist:'The Weeknd', img: "weeknd.jpeg", score: "10/10", user:"shradha206"},
];

const topFourUW = [
 { title:'Nonstop', artist: 'Drake', img: "download.jpeg" },
 { title:'Promiscuous', artist: 'Nelly Furtado ft. Timbaland', img: "Nelly.jpeg"},
 { title:'Work', artist:'Rihanna ft. Drake', img: "work.jpeg"},
 { title:'Blinding Lights', artist:'The Weeknd', img: "weeknd.jpeg"}
];

const cuBoulder = [
  { title: 'Temptation', artist: 'Sidepiece', img: 'temptation.jpeg'},
  { title: 'Forget It', artist: 'Matroda', img: 'forget-it.jpeg'},
  { title: 'Pepas', artist: 'Farruko', img: 'pepas.jpeg'},
  { title: 'San Francisco', artist: 'Dom Dolla', img: 'san-francisco.jpeg'}
];

const waState = [
  { title: 'Losing It', artist: 'Fisher', img: 'losing-it.jpeg'},
  { title:'Promiscuous', artist: 'Nelly Furtado ft. Timbaland', img: "Nelly.jpeg"},
  { title:'Nonstop', artist: 'Drake', img: "download.jpeg"},
  { title: 'Dashstar', artist: "Knock2", img: "dashstar.jpeg"}
];

const scorelist = [
  {scorelist: 'House ScoreList'},
  {scorelist: 'HipHop ScoreList'},
  {scorelist: 'Good Vibes'},
  {scorelist: 'Party'}
];

const musicA= [
  { title: 'San Francisco', artist: 'Dom Dolla', img: 'san-francisco.jpeg' },
  { title: 'Dashstar', artist: "Knock2", img: "dashstar.jpeg"},
  { title: 'Make Me Feel', artist: 'John Summit', img: 'make-me-feel.jpeg'},
  { title: 'Temptation', artist: 'Sidepiece', img: 'temptation.jpeg'}
 ];
 const musicB = [
  { title:'Nonstop', artist: 'Drake', img: "download.jpeg" },
  { title:'Promiscuous', artist: 'Nelly Furtado ft. Timbaland', img: "Nelly.jpeg"},
  { title:'Work', artist:'Rihanna ft. Drake', img: "work.jpeg"},
  { title:'Blinding Lights', artist:'The Weeknd', img: "weeknd.jpeg"}
 ];
 const musicC = [
  { title:'Better', artist: 'Khalid', img: "better.jpeg" },
  { title:'Topanga', artist: 'Trippie Redd', img: "topanga.jpeg"},
  { title:'Yosemite', artist:'Travis Scott', img: "travis.jpeg"},
  { title:'Swang', artist:'Rae Sremmurd', img: "swang.jpeg"}
 ];
 const musicD = [
  { title:'Drip Too Hard', artist: 'Lil Baby', img: "lil baby.jpeg" },
  { title:'X (feat. Future)', artist: '21 Savage', img: "21savage.jpeg"},
  { title:'20 Min', artist:'Lil Uzi Vert', img: "uzivert.jpeg"},
  { title:'Always', artist:'SOB x RBE', img: "sob.jpeg"}
 ];

let playlistArray = [
  musicA, musicB, musicC, musicD
  ];    



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App EXAMPLE_SONGS={EXAMPLE_SONGS} active_song={active_song}  exampleFriends={exampleFriends} topFourUW = {topFourUW} cuBoulder={cuBoulder} waState={waState} scorelist={scorelist} playlistArray={playlistArray}/>
    </BrowserRouter>
  </React.StrictMode>
);
