import React from 'react';
import styled from '@emotion/styled';

const LoadingDotsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  span {
    animation: blink 1.4s linear infinite;
    background-color: #fff;
    border-radius: 50%;
    height: 7px;
    margin: 0 2px;
    width: 7px;

    @keyframes blink {
      0% {
        opacity: 0.2;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0.2;
      }
    }
  }

  span:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  span:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;

const LoadingDots: React.FunctionComponent = () => {
  return (
    <LoadingDotsContainer>
      <span />
      <span />
      <span />
    </LoadingDotsContainer>
  );
};

export default LoadingDots;
