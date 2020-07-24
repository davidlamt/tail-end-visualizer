import React from 'react';
import styled from '@emotion/styled';

import { Modal } from '.';

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 15px;
  text-align: center;
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
  let content;
  if (age < EdgeAge.Min) {
    content =
      "You're too young to be using the computer. Hold on, I'm contacting your parents right now.";
  } else if (age > EdgeAge.Max) {
    content =
      '?$#JKkdjak9()%#5DAISI#$(@*/\nDoE5 N0T CoMpuT3\n\nJust kidding, get outta here and enjoy life!!';
  }

  return (
    <Modal>
      <React.Fragment>
        <Title>Whoa there..</Title>
        <Body>{content}</Body>
      </React.Fragment>
    </Modal>
  );
};

export default InvalidAgeModal;
