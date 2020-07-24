import React from 'react';

import { InvalidAgeModal } from './';

import { useAppContext } from '../../hooks';

interface ModalOptions {
  options: {
    age?: number;
  };
}

interface AvailableModal {
  [key: string]: React.FunctionComponent<ModalOptions>;
}

const AvailableModal: AvailableModal = {
  invalidAge: InvalidAgeModal,
};

const RootModal: React.FunctionComponent = () => {
  const { modalOptions, modalType } = useAppContext();
  if (!modalType) return null;

  const SelectedModal = AvailableModal[modalType];

  if (!SelectedModal) {
    throw new Error(`Invalid modal type: ${modalType}`);
  }

  return <SelectedModal options={modalOptions} />;
};

export default RootModal;
