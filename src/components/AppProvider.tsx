import React, { useState } from 'react';

export interface AppContextValues {
  age: number;
  forceRerender: () => void;
  isAnimating: boolean;
  rerenderBuster: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextValues>({
  age: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  forceRerender: () => {},
  isAnimating: false,
  rerenderBuster: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAge: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsAnimating: () => {},
});

interface AppProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const [rerenderBuster, setRerenderBuster] = useState(0);
  const [age, setAge] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const forceRerender = () => setRerenderBuster(rerenderBuster + 1);

  return (
    <AppContext.Provider
      value={{
        age,
        forceRerender,
        isAnimating,
        rerenderBuster,
        setAge,
        setIsAnimating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
