import React, { useState } from 'react';

export interface AppContextValues {
  age: number;
  isAnimating: boolean;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextValues>({
  age: 0,
  isAnimating: false,
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
  const [age, setAge] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <AppContext.Provider
      value={{
        age,
        isAnimating,
        setAge,
        setIsAnimating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
