import React from 'react';
import {
  Link
} from 'react-router-dom'


function Homepage() {
  return (

    <div className="landing-page">

      <div className="landing-page-item" id="box-one"><h2>Välkommen!<br></br> till åhus bilservice & trädgårdsmaskiner ab </h2></div>

      <div className="landing-page-item"> <Link to="/About"> <button className="first-button">OM OSS</button></Link></div>

      <div className="landing-page-item"><Link to="/Prices"><button className="second-button">Priser</button></Link></div>

    </div>

  );
}

export default Homepage;
