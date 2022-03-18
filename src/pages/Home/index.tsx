import React from 'react';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';
import { useAppDispatch } from '../../hooks';
import { fetchProducts } from '../../redux/slices/productSlice';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const loadProductList = async () => {
      await dispatch(fetchProducts());
    };
    loadProductList();
  }, []);

  return (
    <Loading>
      <ProductList />
    </Loading>
  );
};

export default HomeScreen;
