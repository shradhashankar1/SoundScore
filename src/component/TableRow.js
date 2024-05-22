import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const TableRow = ({ song, updateActive, className, addPlaylist, addScore }) => {
    const { title, artist, img, score } = song;
    const navigate = useNavigate();
    const handleScorelist = () => {
        updateActive(song);
        navigate('/NewScoreLists');
    }

    const handleRowClick = () => {
        updateActive(song);  
        navigate("/SongScreen")
    };
    return (
        <tr className={className}>
            <td onClick={handleRowClick} >{title}</td>
            <td  onClick={handleRowClick}>{artist}</td>
            <td  onClick={handleRowClick}>
                <img className ="" src={img} alt={title} />
            </td>
            {addScore && (
                <td  onClick={handleRowClick}> {score}</td> 
            )}
            {addPlaylist  && (
                <td><button type="button" onClick={handleScorelist} className="btn btn-success"><PlaylistAddCheckIcon /></button></td>
            )}
        </tr>    
    );    
};

export default TableRow;