import React from 'react';
import { useAppSelector } from '../hooks';
import { isLoadingData } from '../redux/slices/uiSlice';
import PulseLoader from 'react-spinners/PulseLoader';

const Loading: React.FC = ({ children }) => {
  const isLoading: boolean = useAppSelector(isLoadingData);

  return !!isLoading ? (
    <div className="d-flex align-items-center justify-content-center my-5" style={{ height: '20em' }}>
      <PulseLoader color="#F5112D" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loading;
