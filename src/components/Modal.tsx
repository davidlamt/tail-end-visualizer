import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactElement | string;
}

const modalRoot = document.getElementById('modal');

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  useEffect(() => {
    if (modalRoot && containerRef.current) {
      modalRoot.appendChild(containerRef.current);
    }

    return () => {
      if (modalRoot && containerRef.current) {
        modalRoot.removeChild(containerRef.current);
      }
    };
  }, []);

  return createPortal(children, containerRef.current);
};

export default Modal;
