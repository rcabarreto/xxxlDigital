import React from 'react';
import LazyLoad from 'react-lazyload';
import { ProductType } from '../types';

import SaleRibbon from '../assets/sale-red-ribbon.png';

const ProductImage: React.FC<Pick<ProductType, 'id' | 'image' | 'eyecatcher'>> = ({ id, image, eyecatcher }) => {
  return (
    <LazyLoad height={278} style={{ height: '278px' }}>
      {!!eyecatcher && (
        <img src={SaleRibbon} className="position-absolute top-0 end-0" style={{ width: '8rem' }} alt="On Sale" />
      )}
      <img src={`${image}?lock=${id}`} className="card-img-top" alt="..." style={{ padding: '6px' }} />
    </LazyLoad>
  );
};

export default ProductImage;
