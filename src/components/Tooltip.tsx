import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { brandDark } from './styles';

interface TooltipStyleProps {
  position: string;
}

const TooltipArrow = styled.span<TooltipStyleProps>`
  position: absolute;

  ${(props) =>
    props.position === 'bottom' &&
    css`
      border-bottom: 8px solid ${brandDark};
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
  background-color: ${brandDark};
  border-radius: 5px;
  color: #fff;
  min-width: 300px;
  padding: 10px;
  position: absolute;
  text-align: center;
  white-space: pre-wrap;
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
  containerStyle?: {
    margin?: string;
  };
  disabled?: boolean;
  position?: string;
  title: string;
  tooltipStyle?: {
    marginTop?: string;
  };
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  containerStyle = {},
  disabled = false,
  position = 'bottom',
  title,
  tooltipStyle = {},
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={containerStyle}
    >
      {children}
      {!disabled && isVisible && (
        <TooltipContent position={position} style={tooltipStyle}>
          <TooltipArrow position={position} />
          {title}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
