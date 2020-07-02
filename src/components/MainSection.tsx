import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { linkBase } from './styles';
import { Point } from './';

import { useAppContext } from '../hooks';

const Description = styled.div`
  font-size: 18px;
  text-align: center;

  a {
    ${linkBase}
  }
`;

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 50em;
`;

const MainSection: React.FunctionComponent = () => {
  const { age } = useAppContext();
  const years = 90;
  const columns = 10;
  const pointsFragment: React.ReactElement[] = [];
  const [animateIdx, setAnimateIdx] = useState(0);

  for (let idx = 1; idx <= years; idx++) {
    pointsFragment.push(<Point key={idx} selected={idx <= animateIdx} />);

    if (idx % columns === 0) {
      pointsFragment.push(<div key={'divider' + idx} />);
    }
  }

  useEffect(() => {
    setAnimateIdx(0);
    for (let idx = 1; idx <= age; idx++) {
      setTimeout(() => setAnimateIdx(idx), 50 * idx);
    }
  }, [age]);

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
      <div>{pointsFragment}</div>
    </MainContainer>
  );
};

export default MainSection;
