import React from 'react';
import ProductTile from '../../components/ProductTile';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ProductType } from '../../types';
import { fetchProducts, selectProductList } from '../../redux/slices/productSlice';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const loadProductList = async () => {
      await dispatch(fetchProducts());
    };
    loadProductList();
  }, []);

  const productList: ProductType[] = useAppSelector(selectProductList);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 mt-2 mb-5">
        {productList.map((product) => (
          <ProductTile key={`product-id-${product.id}`} {...product} />
        ))}
      </div>
      <div className="row mt-2 mb-2">
        <Pagination />
      </div>
    </>
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
