import React from 'react';
import styled from '@emotion/styled';

interface PointsProps {
  selected?: boolean;
}

const StyledPoint = styled.span<PointsProps>`
  animation: ${(props): string =>
    props.selected ? 'selectedAnimation 2s linear' : ''};
  animation-fill-mode: forwards;
  border: 1px solid #000;
  display: inline-block;
  height: 25px;
  margin: 5px;
  width: 25px;

  @keyframes selectedAnimation {
    0% {
      background-color: #d4aa7d;
    }

    50% {
      background-color: #efd09e;
    }

    75% {
      transform: scale(1.2);
      background-color: #d2d8b3;
    }

    100% {
      transform: scale(1);
      background-color: #90a9b7;
    }
  }
`;

const Point: React.FunctionComponent<PointsProps> = ({
  selected = false,
}: {
  selected?: boolean;
}) => {
  return <StyledPoint selected={selected} />;
};

export default Point;
