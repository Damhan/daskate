import React from 'react';
import './../App.css';

function ProductCard(props) {


  return (
      <div className="col product-col">
        <a href="www.damhan.com">
            <img src={props.product.img} alt={props.product.title} width="300" height="auto"/>
        </a>
        <br/>
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
      </div>
  );
}

export default ProductCard;