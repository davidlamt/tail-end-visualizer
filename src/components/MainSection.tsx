import React from 'react';
import styled from '@emotion/styled';

const Description = styled.div`
  font-size: 18px;
  text-align: center;

  a {
    color: #d4aa7d;
  }
`;

const MainContainer = styled.div`
  margin: 20px auto;
  max-width: 50em;
`;

const MainSection: React.FunctionComponent = () => {
  return (
    <MainContainer>
      <Description>
        <p>Let&#39;s put your life in perspective...</p>
        <p>
          This tool is based on{' '}
          <a href="https://waitbutwhy.com/2015/12/the-tail-end.html">
            The Tail End article on Wait Buy Why
          </a>
          .
        </p>
      </Description>
    </MainContainer>
  );
};

export default MainSection;
