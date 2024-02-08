import React from 'react';
import { IconHomeInfinity, IconPlaneTilt, IconCar, IconBeach } from '@tabler/icons-react';
import './Home.css';

export default function Home(){
    return(
        <div className='main_container'>
            <div>
              <nav className='nav_container'>
                <ul>
                    <div className='nav_option'>
                      <IconHomeInfinity className='nav_img'/>
                      <li>Alojamientos</li>
                    </div>
                    <div className='nav_option'>
                      <IconPlaneTilt className='nav_img'/>
                      <li>Vuelos</li>
                    </div>
                    <div className='nav_option'>
                      <IconCar className='nav_img'/>
                      <li>Autos</li>
                    </div>
                    <div className='nav_option'>
                      <IconBeach className='nav_img'/>
                      <li>Paquetes</li>
                    </div>
                </ul>
              </nav>
            </div>
        </div>
    );
}