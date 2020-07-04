import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

interface TooltipStyleProps {
  position: string;
}

const TooltipArrow = styled.span<TooltipStyleProps>`
  position: absolute;

  ${(props) =>
    props.position === 'bottom' &&
    css`
      border-bottom: 8px solid #282c34;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      left: 50%;
      top: -8px;
      transform: translateX(-50%);
    `}
`;

const TooltipContainer = styled.span`
  display: inline-block;
  position: relative;
`;

const TooltipContent = styled.div<TooltipStyleProps>`
  animation: fadeIn ease-in 0.5s;
  background-color: #282c34;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  position: absolute;
  z-index: 10;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${(props) =>
    props.position === 'bottom' &&
    css`
      left: 50%;
      margin-top: 10px;
      transform: translateX(-50%);
    `}
`;

interface TooltipProps {
  children: React.ReactElement | React.ReactElement[];
  position?: string;
  title: string;
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  position = 'bottom',
  title,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <TooltipContent position={position}>
          <TooltipArrow position={position} />
          {title}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
