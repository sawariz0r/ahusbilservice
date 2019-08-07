import React from 'react';

import {
  Link
} from 'react-router-dom'


function Prices() {
  return (

    <div className="news-page">
        
        <div className="jumbotron">
              <h1 className="display-4">Våra priser!</h1>
              <p className="lead">Vi fixar allt på din bil.. bla bla bla Cras at lacus
               eu felis vehicula convallis. Pellentesque in turpis eu elit dignissim placerat. Sed</p>
              <hr className="my-4"></hr>
              <p className="lead">Prislista:</p>
              <p className="lead">Serva bilen: 1336kr</p>
              <p className="lead">Byta däck: 666kr</p>
              <p className="lead">Fixa bilen polarN: 6969kr</p>
              <p className="lead">byta olja: 0kr</p>
              <p className="lead">Kolla motorn: 1234</p>

              
                <Link className="btn btn-primary btn-lg" to="/">BACK</Link>
              
        </div>

    </div>

  );
}

export default Prices;
