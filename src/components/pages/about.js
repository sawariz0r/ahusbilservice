import React from 'react';

import {
  Link
} from 'react-router-dom'



function About() {
  return (

    <div className="news-page">
        
        <div class="jumbotron">
              <h1 class="display-4">Om oss!</h1>
              <p class="lead">Vi är en liten verkstad placerat i åhus.. bla bla bla Cras at lacus
               eu felis vehicula convallis. Pellentesque in turpis eu elit dignissim placerat. Sed</p>
              <hr class="my-4"></hr>
              <p>Vi fixar din bil..Cras at lacus eu felis vehicula convallis. Pellentesque
                 in turpis eu elit dignissim placerat. Sed aliquet vehicula ex, eget sodales
                  mauris pulvinar id. Orci varius natoque penatibus et magnis dis parturient
                   montes, nascetur ridiculus mus. Morbi sed lacus vestibulum sem commodo gravida nec eu neque</p>
              <p class="lead">
                <Link className="btn btn-primary btn-lg" to="/">BACK</Link>
              </p>
        </div>

       

    </div>

  );
}

export default About;
