import React from 'react';

const About = ()=> { 
   return <about>
   <center><h1>About</h1> </center> 
  <div className="container">
  <div className="cards">
  <a href="#"  className="card">
  <span class="card-header">
  <span className="card-title"><h3>Life with a plan! </h3> </span>
  </span>
<span className="card-summary">
    Plan your life with our application.
 </span>
</a>


<a href="#"  className="card">
  <span class="card-header2">
  <span className="card-title"><h3> Dont forget!</h3> </span>
  </span>
<span className="card-summary">
   Dont forget anything.
 </span>
</a>


<a href="#"  className="card">
  <span class="card-header3">
  <span className="card-title"><h3> Time is important! </h3> </span>
  </span>
<span className="card-summary">
Do things on time.
 </span>
</a>





  </div>
</div>


</about>;   
};

export default About;
