import React from 'react';
import styled from '@emotion/styled';

import { ModalPortal } from './';

const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  height: 300px;
  padding: 10px;
  width: 300px;
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
