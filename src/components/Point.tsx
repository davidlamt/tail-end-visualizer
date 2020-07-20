import React from 'react';
import styled from '@emotion/styled';

interface PointProps {
  pointRef?: (ref: HTMLSpanElement | null) => void;
}

const StyledPoint = styled.span<PointProps>`
  border: 1px solid #000;
  display: block;
  height: 25px;
  transition: transform 1s ease, background-color 0.5s linear;
  width: 25px;

  &--complete {
    &:hover {
      transform: rotate(45deg);
    }
  }

  &--selected {
    animation: selectedAnimation 2s linear;
    background-color: #90a9b7;
  }

  &--lastSelected {
    animation: rotateAnimation 10s linear infinite;
  }

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

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Point: React.FunctionComponent<PointProps> = ({
  pointRef,
}: PointProps) => {
  return <StyledPoint ref={pointRef} />;
};

export default Point;
