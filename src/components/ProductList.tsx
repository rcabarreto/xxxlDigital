import React from 'react';
import ProductTile from './ProductTile';
import { useAppSelector } from '../hooks';
import { ProductType } from '../types';
import { selectSortedProducts } from '../redux/slices/productSlice';

const ProductList: React.FC = () => {
  const [sortBy, setSortBy] = React.useState<'name' | 'price' | 'eyecatcher'>('name');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [pageNum, setPageNum] = React.useState<number>(0);

  const productList: ProductType[] = useAppSelector((state) =>
    selectSortedProducts(state, sortBy, sortDirection, pageNum)
  );

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 mt-0 mb-5">
        {productList.map((product) => (
          <ProductTile key={`product-id-${product.id}`} {...product} />
        ))}
      </div>
      <div className="row mt-2 mb-2">
        <Pagination currentPage={pageNum} changePage={setPageNum} />
      </div>
    </>
  );
};

const Pagination: React.FC<{ currentPage: number; changePage: React.Dispatch<React.SetStateAction<number>> }> = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li className="page-item active">
          <a className="page-link" href="/">
            1
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

export default ProductList;
