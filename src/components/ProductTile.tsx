import React from 'react';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import { ProductType } from '../types';

const ProductTile: React.FC<ProductType> = ({ id, name, brand, image, eyecatcher, price, priceSale }) => {
  return (
    <div className="col">
      <div className="card" style={{ height: '100%' }}>
        <ProductImage id={id} image={image} eyecatcher={eyecatcher} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
          <ProductPrice price={price} priceSale={priceSale} eyecatcher={eyecatcher} />
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
