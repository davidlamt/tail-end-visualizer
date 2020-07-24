import React, { useState } from 'react';

export interface AppContextValues {
  age: number;
  forceRerender: () => void;
  hideModal: () => void;
  isAnimating: boolean;
  modalOptions: { age?: number };
  modalType: string;
  rerenderBuster: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: (type: string, options?: { age?: number }) => void;
}

export const AppContext = React.createContext<AppContextValues>({
  age: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  forceRerender: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideModal: () => {},
  isAnimating: false,
  modalOptions: {},
  modalType: '',
  rerenderBuster: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAge: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsAnimating: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showModal: () => {},
});

interface AppProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const [age, setAge] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalType, setModalType] = useState('');
  const [rerenderBuster, setRerenderBuster] = useState(0);
  const [modalOptions, setModalOptions] = useState({});

  const forceRerender = () => setRerenderBuster(rerenderBuster + 1);
  const hideModal = () => setModalType('');
  const showModal = (type: string, options = {}) => {
    setModalOptions(options);
    setModalType(type);
  };

  return (
    <AppContext.Provider
      value={{
        age,
        forceRerender,
        hideModal,
        isAnimating,
        modalOptions,
        modalType,
        rerenderBuster,
        setAge,
        setIsAnimating,
        showModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
