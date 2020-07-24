import React from 'react';
import styled from '@emotion/styled';

import { primaryColor } from '../styles';
import { Modal } from '.';

import { useAppContext } from '../../hooks';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 15px;
  text-align: center;
`;

const CloseModalButton = styled.button`
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  cursor: pointer;
  height: 25px;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;

  &:hover {
    background-color: ${primaryColor};
    color: #fff;
  }
`;

const Body = styled.div`
  line-height: 1.5;
  text-align: center;
  white-space: pre-wrap;
`;

const EdgeAge = {
  Min: 1,
  Max: 90,
};

interface InvalidAgeModalProps {
  options: { age?: number };
}

const InvalidAgeModal: React.FunctionComponent<InvalidAgeModalProps> = ({
  options: { age = 0 },
}: InvalidAgeModalProps) => {
  const { hideModal } = useAppContext();

  let content = `You're ${age}?\n\n`;
  if (age < EdgeAge.Min) {
    content +=
      "You're too young to be using the computer. Hold on, I'm contacting your parents right now.";
  } else if (age > EdgeAge.Max) {
    content +=
      '?$#JKkdjak9()%#5DAISI#$(@*/\nDoE5 N0T CoMpuT3\n\nJust kidding, get outta here and enjoy life!!';
  }

  return (
    <Modal>
      <React.Fragment>
        <TitleContainer>
          <Title>Whoa there...</Title>
          <CloseModalButton onClick={hideModal}>X</CloseModalButton>
        </TitleContainer>
        <Body>{content}</Body>
      </React.Fragment>
    </Modal>
  );
};

export default InvalidAgeModal;
