import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { linkBase } from './styles';
import { Point, Tooltip } from './';

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
  const { age, setIsAnimating } = useAppContext();
  const [animateRange, setAnimateRange] = useState(0);
  const years = 90;
  const columns = 10;
  const pointsFragment: React.ReactElement[] = [];

  useEffect(() => {
    setAnimateRange(0);

    for (let idx = 1; idx <= age; idx++) {
      setTimeout(() => {
        setAnimateRange(idx);

        if (idx === 1) {
          setIsAnimating(true);
        } else if (idx === age) {
          setIsAnimating(false);
        }
      }, 50 * idx);
    }
  }, [age, setIsAnimating]);

  for (let idx = 1; idx <= years; idx++) {
    pointsFragment.push(
      <Tooltip key={idx} title="Test Tooltip">
        <Point selected={idx <= animateRange} />
      </Tooltip>
    );

    if (idx % columns === 0) {
      pointsFragment.push(<div key={'divider' + idx} />);
    }
  }

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
      {/* TODO: Can we remove this div? */}
      <div>{pointsFragment}</div>
    </MainContainer>
  );
};

export default MainSection;
