import React from 'react';
import ProductTile from '../../components/ProductTile';
import { ProductType } from '../../types';

const productList: ProductType[] = [
  {
    brand: 'Smith-Bins',
    eyecatcher: 'sale',
    id: 1,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Transcof',
    price: 655,
    priceSale: 357,
    url: 'https://soup.io/augue/quam.json',
  },
  {
    brand: 'Strosin Inc',
    eyecatcher: null,
    id: 2,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Konklux',
    price: 669,
    priceSale: 389,
    url: 'https://eepurl.com/quam/pharetra.jsp',
  },
  {
    brand: 'Stark Inc',
    eyecatcher: 'sale',
    id: 3,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Vagram',
    price: 566,
    priceSale: 428,
    url: 'http://amazonaws.com/in/imperdiet/et.jsp',
  },
  {
    brand: 'Blick, Cartwright and Swift',
    eyecatcher: null,
    id: 4,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Bigtax',
    price: 542,
    priceSale: 331,
    url: 'https://msu.edu/et/ultrices/posuere/cubilia/curae/duis.jsp',
  },
  {
    brand: 'Lubowitz-Hayes',
    eyecatcher: null,
    id: 5,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Transcof',
    price: 798,
    priceSale: 402,
    url: 'https://csmonitor.com/velit/donec.js',
  },
  {
    brand: 'Wintheiser, Rohan and Connelly',
    eyecatcher: null,
    id: 6,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Cardguard',
    price: 936,
    priceSale: 470,
    url: 'http://ftc.gov/donec/posuere/metus/vitae.png',
  },
  {
    brand: 'Pfeffer, Flatley and Schiller',
    eyecatcher: null,
    id: 7,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Lotlux',
    price: 892,
    priceSale: 398,
    url: 'https://devhub.com/cubilia/curae/duis/faucibus/accumsan/odio/curabitur.json',
  },
  {
    brand: 'Graham, Hermann and Brakus',
    eyecatcher: 'sale',
    id: 8,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Rank',
    price: 576,
    priceSale: 471,
    url: 'http://who.int/felis/donec.aspx',
  },
  {
    brand: 'Fadel-Dietrich',
    eyecatcher: 'sale',
    id: 9,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Redhold',
    price: 509,
    priceSale: 456,
    url: 'https://foxnews.com/pellentesque.jsp',
  },
  {
    brand: 'Stehr LLC',
    eyecatcher: null,
    id: 10,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Home Ing',
    price: 802,
    priceSale: 458,
    url: 'http://marketwatch.com/pharetra/magna/ac/consequat.jpg',
  },
  {
    brand: 'Wiegand LLC',
    eyecatcher: null,
    id: 11,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Solarbreeze',
    price: 743,
    priceSale: 332,
    url: 'https://xrea.com/faucibus/orci/luctus/et/ultrices/posuere/cubilia.jpg',
  },
  {
    brand: 'Bergnaum-Bartoletti',
    eyecatcher: null,
    id: 12,
    image: 'https://loremflickr.com/320/320/furniture,chair/all',
    name: 'Bamity',
    price: 677,
    priceSale: 300,
    url: 'http://lulu.com/sapien/sapien.aspx',
  },
];

const HomeScreen: React.FC = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 mt-2 mb-5">
      {productList.map((product) => (
        <ProductTile key={`product-id-${product.id}`} {...product} />
      ))}
      <Pagination />
    </div>
  );
};

const ProductList: React.FC = () => {
  return null;
};

const Pagination: React.FC = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default HomeScreen;
