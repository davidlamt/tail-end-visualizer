import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { linkBase } from './styles';
import { Point, Tooltip } from './';

import { useAppContext } from '../hooks';
import perYearStatistics from '../static/perYearStatistics';

const MAX_AGE = 90;
const MAX_COLUMNS = 10;

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

const statisticFormatter = new Intl.NumberFormat('en-US', {
  // eslint-disable-next-line
  // @ts-ignore: Types not defined for these options yet
  notation: 'compact',
  compactDisplay: 'long',
});

const generateTooltipContent = (age: number): string => {
  const percentOfTotal = Math.floor((age / MAX_AGE) * 100);
  const randomStatistic =
    perYearStatistics[Math.floor(Math.random() * perYearStatistics.length)];
  const totalStatisticCountLeft =
    randomStatistic.perYearCount * (MAX_AGE - age);

  /* eslint-disable */
  return (
    'Year ' + age + ' (' + percentOfTotal + '% to ' + MAX_AGE + ')' + '\n' + 
    'There\'s about ' + statisticFormatter.format(totalStatisticCountLeft) + ' ' + randomStatistic.noun + 's left. Make them count!'
  );
  /* eslint-enable */
};

const MainSection: React.FunctionComponent = () => {
  const { age, setIsAnimating } = useAppContext();
  const [animateRange, setAnimateRange] = useState(0);
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

  for (let idx = 1; idx <= MAX_AGE; idx++) {
    const selected = idx <= animateRange;

    pointsFragment.push(
      <Tooltip key={idx} title={generateTooltipContent(idx)}>
        <Point selected={selected} />
      </Tooltip>
    );

    if (idx % MAX_COLUMNS === 0) {
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
      <div>{pointsFragment}</div>
    </MainContainer>
  );
};

export default MainSection;
