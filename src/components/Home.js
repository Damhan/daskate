import React from 'react';
import {useState} from 'react';
import './../App.css';
import Lander from './../assets/skateboard-lander.jpg';
import Deck from './../assets/deck.jpeg';
import Banner from './../assets/travis-yewell-43ScFMWx2xY-unsplash.jpg';
import ProductCard from './ProductCard';

function Home(props) {

  const [latestProds, setLatestProds] = useState([
    {id:1, title: 'Mini logo - 8.25', price: 29.99, img:Deck},
    {id:2, title: 'Mini logo - 8.0', price: 19.99, img:Deck},
    {id:3, title: 'Mini logo - 7.75', price: 39.99, img:Deck},
    {id:4, title: 'Mini Logo - 7.5', price: 29.99, img:Deck},
    ]);

  let content = [];
  latestProds.forEach((product, i)   => {
    content.push(<ProductCard key={i} product={product}/>)
  });

  return (
      <div className="container-fluid">
        <div className="row">

          <div className="img-container">
            <h1 className="bottom-left">2020 release <br/> <a href="/" className="call-to-action">Shop Now</a> </h1>
            <img alt="Skateboarding man - widescreen lander" src={Lander} className="lander-img"/>
          </div>
        </div>

        <div className="row">
          <div className="prod-latest-container">
            <h1 className="prod-latest-header">Latest</h1>
          </div>
        </div>

        <div className="row">
          {content}
        </div>

        <div className="row">
          <div className="img-container">
            <img alt="Skateboarder jumping fence" src={Banner} className="banner-img"/>
          </div>
        </div>
      </div>
  );
}

export default Home;