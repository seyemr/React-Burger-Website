import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '../helpers/MenuList';
import './ProductPage.css'; // Import the CSS file

function ProductPage() {
  return (
    <div className='detail' style={{ background: "" }}>
      {MenuList.map((product, id) => {
        return (
          <div key={id}>
            <h2>{product.name}</h2>
            <img className='images' src={product.image} alt={product.name} />
            <p className='price'>Price: {product.price} TL</p>
            <h3>Details:</h3>
            
            
            <ul>
              {/* <li>{product.detail1}</li> */}
              <li>{product.detail2}</li>
              <li>{product.detail3}</li>
              <li>{product.detail4}</li>
              <li>{product.detail5}</li>
              <li>{product.detail6}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
