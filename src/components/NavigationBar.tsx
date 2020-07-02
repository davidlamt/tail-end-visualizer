import React, { useState } from 'react';
import styled from '@emotion/styled';

import { primaryButtonBase } from './styles';

const AgeInput = styled.input`
  background-color: #ebebeb;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  padding: 15px;
  transition: background-color 0.3s ease;

  &:focus {
    background-color: #fff;
    border: 1px solid #ebebeb;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin: 5px;
`;

const NavigationContainer = styled.nav`
  align-items: center;
  background-color: #282c34;
  color: #fff;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  padding: 0 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const NavigationHeader = styled.h1`
  font-weight: 700;
  margin: 0;
`;

const VisualizeButton = styled.button`
  ${primaryButtonBase}

  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

const NavigationBar: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <NavigationHeader>The Tail End Visualizer</NavigationHeader>
      <InputContainer>
        <AgeInput placeholder="Enter your age" />
        <VisualizeButton>Visualize</VisualizeButton>
      </InputContainer>
    </NavigationContainer>
  );
};

export default NavigationBar;
