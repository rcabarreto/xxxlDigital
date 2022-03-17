import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import PriceLabel from './PriceLabel';
import { ProductType } from '../types';

import SaleRibbon from '../assets/sale-red-ribbon.png';

const ProductTile: React.FC<ProductType> = ({ id, name, brand, image, eyecatcher, price, priceSale }) => {
  return (
    <div className="col">
      <div className="card" style={{ height: '100%' }}>
        <ProductImage id={id} image={image} eyecatcher={eyecatcher} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
          <p className="card-text">Some description.</p>

          <PriceLabel price={price} priceSale={priceSale} eyecatcher={eyecatcher} />
        </div>
      </div>
    </div>
  );
};

const ProductImage: React.FC<Pick<ProductType, 'id' | 'image' | 'eyecatcher'>> = ({ id, image, eyecatcher }) => {
  return (
    <LazyLoad height={200}>
      {!!eyecatcher && (
        <img src={SaleRibbon} className="position-absolute top-0 end-0" style={{ width: '8rem' }} alt="On Sale" />
      )}
      <img src={`${image}?lock=${id}`} className="card-img-top" alt="..." style={{ padding: '6px' }} />
    </LazyLoad>
  );
};

export default ProductTile;
