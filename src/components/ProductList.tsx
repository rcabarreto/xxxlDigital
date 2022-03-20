import React from 'react';
import ProductTile from './ProductTile';
import Pagination from './Pagination';
import { useAppSelector } from '../hooks';
import { ProductType } from '../types';
import { selectProductList, selectTotalPageCount } from '../redux/slices/productSlice';

const ProductList: React.FC = () => {
  const [sortBy, setSortBy] = React.useState<'name' | 'price' | 'eyecatcher'>('name');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [pageNum, setPageNum] = React.useState<number>(0);

  const pageCount: number = useAppSelector(selectTotalPageCount);
  const productList: ProductType[] = useAppSelector((state) =>
    selectProductList(state, sortBy, sortDirection, pageNum)
  );

  React.useEffect(() => window.scrollTo(0, 0), [pageNum]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 mt-0 mb-5">
        {productList.map((product) => (
          <ProductTile key={`product-id-${product.id}`} {...product} />
        ))}
      </div>
      <div className="row mt-2 mb-2">
        <Pagination currentPage={pageNum} pageCount={pageCount} changePage={setPageNum} />
      </div>
    </>
  );
};

export default ProductList;
