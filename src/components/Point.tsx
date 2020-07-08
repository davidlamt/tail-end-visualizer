import React from 'react';
import styled from '@emotion/styled';

interface PointProps {
  lastSelected?: boolean;
  pointRef?: (ref: HTMLSpanElement | null) => void;
  selected?: boolean;
}

const StyledPoint = styled.span<PointProps>`
  animation: ${(props): string =>
    props.lastSelected
      ? 'rotateAnimation 10s linear infinite'
      : props.selected
      ? 'selectedAnimation 2s linear'
      : ''};
  background-color: ${(props): string => (props.selected ? '#90a9b7' : '')};
  border: 1px solid #000;
  display: inline-block;
  height: 25px;
  margin: 5px;
  transition: transform 1s ease;
  width: 25px;

  &:hover {
    transform: rotate(45deg);
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
  lastSelected = false,
  pointRef,
  selected = false,
}: PointProps) => {
  return (
    <StyledPoint
      lastSelected={lastSelected}
      ref={pointRef}
      selected={selected}
    />
  );
};

export default Point;
