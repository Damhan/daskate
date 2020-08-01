import React from 'react';
import './../App.css';
import Lander from './../assets/skateboard-lander.jpg';

function Home() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="img-container">
            <h1 className="bottom-left">2020 Release <br/> <a href="/" className="call-to-action">Shop Now</a> </h1>
            <img alt="Skateboarding man - widescreen lander" src={Lander} className="lander-img"/>
          </div>
        </div>
      </div>
  );
}

export default Home;