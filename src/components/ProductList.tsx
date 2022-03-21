import React from 'react';
import { BsSortDownAlt, BsSortUp } from 'react-icons/bs';
import ProductTile from './ProductTile';
import Pagination from './Pagination';
import { useAppSelector } from '../hooks';
import { ProductType } from '../types';
import { selectSearchStr } from '../redux/slices/uiSlice';
import { selectProductList } from '../redux/slices/productSlice';
import { PRODUCTS_PER_PAGE } from '../constants';

const ProductList: React.FC = () => {
  const [sortBy, setSortBy] = React.useState<'name' | 'price' | 'eyecatcher'>('price');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [pageNum, setPageNum] = React.useState<number>(0);

  const productSearch: string = useAppSelector(selectSearchStr);

  const productList: ProductType[] = useAppSelector((state) =>
    selectProductList(state, productSearch, sortBy, sortDirection, pageNum)
  );

  const toggleSortDirection = () => {
    if (sortDirection === 'asc') {
      return setSortDirection('desc');
    }
    return setSortDirection('asc');
  };

  React.useEffect(() => {
    setPageNum(0);
  }, [productSearch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  const paginationFrom = pageNum * PRODUCTS_PER_PAGE;
  const paginationTo = paginationFrom + PRODUCTS_PER_PAGE;
  const pageProductList = productList.slice(paginationFrom, paginationTo);

  const pageCount =
    parseInt(`${productList.length / PRODUCTS_PER_PAGE}`) + (!!(productList.length % PRODUCTS_PER_PAGE) ? 1 : 0);

  if (!pageProductList.length)
    return <div className="d-flex my-5 align-items-center justify-content-center">Nothing found!</div>;

  return (
    <>
      <div className="d-flex mt-5 mb-0 justify-content-end">
        <div className="row g-3">
          <div className="col-auto">
            <select
              onChange={(evt) => setSortBy(evt.target.value as 'name' | 'price' | 'eyecatcher')}
              className="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="eyecatcher">Eyecatcher</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-danger btn-sm mb-3" onClick={toggleSortDirection}>
              {sortDirection === 'asc' ? <BsSortDownAlt /> : <BsSortUp />}
            </button>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 mt-0 mb-3">
        {pageProductList.map((product) => (
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
