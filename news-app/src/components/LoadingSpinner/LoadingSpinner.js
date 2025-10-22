import React from 'react';
import {
  LoadingContainer,
  SpinnerWrapper,
  Spinner,
  LoadingText
} from './LoadingSpinner.styles';

const LoadingSpinner = ({ message = 'Загрузка новостей...' }) => {
  return (
    <LoadingContainer>
      <SpinnerWrapper>
        <Spinner />
        <LoadingText>{message}</LoadingText>
      </SpinnerWrapper>
    </LoadingContainer>
  );
};

export default LoadingSpinner;