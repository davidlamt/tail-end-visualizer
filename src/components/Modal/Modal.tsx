import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { ModalPortal } from './';

import { useAppContext } from '../../hooks';

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
  closeOnOutsideClick?: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  closeOnOutsideClick = false,
}: ModalProps) => {
  const { hideModal } = useAppContext();
  const modalBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        closeOnOutsideClick &&
        modalBoxRef &&
        modalBoxRef.current &&
        !modalBoxRef.current.contains(event.target as Node)
      ) {
        hideModal();
      }
    }

    if (closeOnOutsideClick) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [closeOnOutsideClick, hideModal]);

  return (
    <ModalPortal>
      <ModalBox ref={modalBoxRef}>{children}</ModalBox>
    </ModalPortal>
  );
};

export default Modal;
