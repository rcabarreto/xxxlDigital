import React from 'react';

import { amountParser } from '../utils';
import { ProductType } from '../types';

const PriceLabel: React.FC<Pick<ProductType, 'price'> & { type?: 'regular' | 'oldPrice' | 'salePrice' }> = ({
  price,
  type = 'regular',
}) => {
  const [integer, decimal] = amountParser(price);

  return (
    <div className={`price ${type}`}>
      <span className="integer">€ {integer},</span>
      <span className="decimal">{decimal}</span>
    </div>
  );
};

const PriceComponent: React.FC<Pick<ProductType, 'price' | 'priceSale' | 'eyecatcher'>> = ({
  price,
  priceSale,
  eyecatcher,
}) => {
  return (
    <div className="d-flex flex-column justify-content-end align-items-start" style={{ height: '60px' }}>
      <PriceLabel price={price} type={!eyecatcher ? 'regular' : 'oldPrice'} />
      {!!eyecatcher && <PriceLabel price={priceSale} type={'salePrice'} />}
    </div>
  );
};

export default PriceComponent;
