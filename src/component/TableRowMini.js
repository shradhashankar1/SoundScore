import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const TableRowMini = ({scorelist, updateScorelist}) => {
    const navigate = useNavigate();


    const handleRowClick = () => {
        updateScorelist(scorelist.scorelist);

        navigate("/Scorelists");
    };
    return (
        <tr onClick={handleRowClick}>
            <td>{scorelist.scorelist}</td>
        </tr>    
    );    
};

export default TableRowMini;