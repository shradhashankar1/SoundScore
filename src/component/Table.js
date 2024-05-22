import React from 'react'; 
import TableHeader from './TableHeader';
import TableRow from './TableRow';


const Table = ({ songs, className, updateActive, addPlaylist, addScore }) => {
  let columnNames = ['Title', 'Artist', 'Album']
  {addScore && (
    columnNames = ['Title', 'Artist', 'Album', 'Score']
  )}
  {addPlaylist && (
    columnNames = ['Title', 'Artist', 'Album', 'Score', 'Playlist']
  )}

  return (
    <table className={className}>
      <TableHeader columnNames={ columnNames } />
      <tbody>
        {songs.map((song, index) => (
          <TableRow key={index} song={song} updateActive={updateActive} className={className} addPlaylist={addPlaylist} addScore={addScore}/>
        ))}
      </tbody>
    </table>
  );
};

export default Table;