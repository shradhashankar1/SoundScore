import React from 'react';
import { GraphicEq, School, AccountCircle } from '@mui/icons-material';
import '../index.css'; 
import {NavLink} from 'react-router-dom';



function Nav() {
    return(
    <nav id="aboutLinks">
      <ul className="list-unstyled">
        <li><NavLink to="#/"></NavLink></li>
        <li><NavLink to="/Home"><GraphicEq id = 'middle'  icon="graphic_eq" />SoundScore</NavLink></li>
        <li className = 'remove-medium'><NavLink to="/friend-activity">Friend Activity</NavLink></li>
        <li className = 'remove-medium'><NavLink to="/uniActivity">University Activity</NavLink></li>
        <li><NavLink to="/Library">Library</NavLink></li>
        <li className = 'remove-small'><NavLink to="/Stats">Stats</NavLink></li>
        <li className="right"><NavLink to="/Profile"><AccountCircle id = 'middle' icon="account_circle" /></NavLink></li>
        <li className="right remove-medium"><NavLink to="/UW"><School id="school middle" icon="school" />University of Washington</NavLink></li>
      </ul>
    </nav>
    );
}

export default Nav;