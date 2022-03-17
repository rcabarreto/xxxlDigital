import React from 'react';
import { useAppSelector } from '../hooks';
import { isLoadingData } from '../redux/slices/uiSlice';

const Loading: React.FC = () => {
  const isLoading: boolean = useAppSelector(isLoadingData);

  return <div>loading... {`${isLoading}`}</div>;
};

export default Loading;
