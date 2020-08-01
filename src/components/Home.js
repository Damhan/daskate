import React from 'react';
import './../App.css';
import Lander from './../assets/skateboard-lander.jpg';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Home() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="img-container">
            <h1 className="bottom-left">2020 Release <br/> <a className="call-to-action">Shop Now</a> </h1>
            <img src={Lander} className="lander-img"/>
          </div>
        </div>
      </div>

  );
}

export default Home;