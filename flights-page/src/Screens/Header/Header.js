import React from "react";
import { IconMenu2, IconHeartFilled, IconUser } from '@tabler/icons-react';
import logito from '../../Assets/logito.png';
import './Header.css';

export default function Header(){

    return(
       <div className="main_container">
        <div className="icons_container">
           <IconMenu2/>
           <img src={logito} className="image" alt="BigCo Inc. logo"/>
        </div>
        <div>
           <IconHeartFilled/>
           <IconUser/>
        </div>
       </div>
    );
}