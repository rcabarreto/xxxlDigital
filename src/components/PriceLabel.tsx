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
  if (!eyecatcher) return <PriceLabel price={price} />;

  return (
    <>
      <PriceLabel price={price} type={'oldPrice'} />
      <PriceLabel price={price} type={'salePrice'} />
    </>
  );
};

export default PriceComponent;
