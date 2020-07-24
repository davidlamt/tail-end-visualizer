import React from 'react';
import styled from '@emotion/styled';

import { ModalPortal } from './';

const ModalBox = styled.div`
  animation: slideInTop ease-in 0.3s;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  width: 300px;

  @keyframes slideInTop {
    0% {
      opacity: 0;
      transform: translateY(-25%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

interface ModalProps {
  children: Element | React.ReactElement | string;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
}: ModalProps) => {
  return (
    <ModalPortal>
      <ModalBox>{children}</ModalBox>
    </ModalPortal>
  );
};

export default Modal;
