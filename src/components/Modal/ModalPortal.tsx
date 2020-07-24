import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalContainer = document.createElement('div');
ModalContainer.style.alignItems = 'center';
ModalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
ModalContainer.style.display = 'flex';
ModalContainer.style.height = '100%';
ModalContainer.style.justifyContent = 'center';
ModalContainer.style.left = '0';
ModalContainer.style.position = 'absolute';
ModalContainer.style.top = '0';
ModalContainer.style.width = '100%';
ModalContainer.style.zIndex = '1';

const modalRoot = document.getElementById('modal');

interface ModalProps {
  children: React.ReactElement | string;
}

const ModalPortal: React.FunctionComponent<ModalProps> = ({
  children,
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  if (!containerRef.current) {
    containerRef.current = ModalContainer;
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

export default ModalPortal;
