import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { linkBase } from './styles';
import { Point, Tooltip } from './';

import { ClassModifier } from '../enums';
import { useAppContext } from '../hooks';
import perYearStatistics from '../static/perYearStatistics';
import {
  addPointClassModifiers,
  resetPointClassModifiers,
} from '../utils/pointClassModifiers';
import { mouseOverEvent, mouseOutEvent } from '../utils/mouseEvents';

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
  if (age === MAX_AGE) {
    return '🎉🎉🎉\nWoo! Celebrations are in order!\n🎊 🎊';
  }

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

const pointRefs: HTMLSpanElement[] = new Array(MAX_AGE);
let previousLastSelectedPointRef: HTMLSpanElement | null = null;

const MainSection: React.FunctionComponent = () => {
  const { age, isAnimating, rerenderBuster, setIsAnimating } = useAppContext();
  const lastSelectedPointRef = useRef<HTMLSpanElement | null>(null);
  const pointsFragment: React.ReactElement[] = [];

  const showSelectedAgeTooltip = (
    visible = true,
    pointRef = lastSelectedPointRef?.current
  ) => {
    if (pointRef) {
      if (previousLastSelectedPointRef) {
        previousLastSelectedPointRef.dispatchEvent(mouseOutEvent);
      }
      previousLastSelectedPointRef = pointRef;

      pointRef.dispatchEvent(visible ? mouseOverEvent : mouseOutEvent);
    }
  };

  useEffect(() => {
    if (age < 1) return;

    resetPointClassModifiers(pointRefs);
    setIsAnimating(true);

    for (let idx = 1; idx <= age; idx++) {
      setTimeout(() => {
        const baseClass = pointRefs[idx].classList[0];
        pointRefs[idx].classList.add(`${baseClass}${ClassModifier.Selected}`);

        if (idx === age) {
          setTimeout(() => {
            setIsAnimating(false);
            showSelectedAgeTooltip();

            pointRefs[idx].classList.add(
              `${baseClass}${ClassModifier.LastSelected}`
            );

            addPointClassModifiers(ClassModifier.Complete, pointRefs);
          }, 2000);
        }
      }, 50 * idx);
    }
  }, [age, rerenderBuster, setIsAnimating]);

  for (let idx = 1; idx <= MAX_AGE; idx++) {
    pointsFragment.push(
      <Tooltip
        containerStyle={{ margin: '5px' }}
        disabled={isAnimating || !age}
        getTitle={() => generateTooltipContent(idx)}
        key={idx}
        tooltipStyle={{ marginTop: '15px' }}
      >
        <Point
          pointRef={(ref) => {
            if (ref) {
              if (idx === age) lastSelectedPointRef.current = ref;
              pointRefs[idx] = ref;
            }
          }}
        />
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
            The Tail End article on Wait But Why
          </a>
          .
        </p>
      </Description>
      <div onMouseEnter={() => showSelectedAgeTooltip(false)}>
        {pointsFragment}
      </div>
    </MainContainer>
  );
};

export default MainSection;
