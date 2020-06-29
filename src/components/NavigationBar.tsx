import React from 'react';
import styled from '@emotion/styled';

const NavigationContainer = styled.nav`
  align-items: center;
  background-color: #282c34;
  color: #fff;
  display: flex;
  min-height: 50px;
  padding: 0 20px;
`;

const NavigationHeader = styled.h1`
  font-weight: 700;
  margin: 0;
`;

const NavigationBar: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <NavigationHeader>The Tail End Visualizer</NavigationHeader>
    </NavigationContainer>
  );
};

export default NavigationBar;
