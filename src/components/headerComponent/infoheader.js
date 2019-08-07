import React from 'react';
/*import {
    Link
  } from 'react-router-dom'
  */


//import logo from '../../assets/images/logo.png';


function Infoheader() {
  return (
    <header>

        <div className="header-grid">

            <div className="grid-item"><h2><i className="fas fa-phone"></i> Ring oss:<br></br>044-24 08 55 </h2></div>
            
            <div className="grid-item"><h2><i className="fas fa-envelope"></i> Emaila oss:<br></br> <a href = "mailto: abc@example.com">Petersemail@gmail.com</a></h2></div>

            <div className="grid-item"><h2><i className="fas fa-map-marker-alt"></i> Besök oss:<br></br>  Nordanvägen 4, 296 32 Åhus</h2></div>

            <div className="grid-item"><h2><i className="far fa-clock"></i> Öppettider:<br></br>8-17 Alla dagar</h2></div>

        </div>

    </header>
  );
}

export default Infoheader;
