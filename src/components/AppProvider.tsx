import React, { useState } from 'react';

export interface AppContextValues {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextValues>({
  age: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAge: () => {},
});

interface AppProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const [age, setAge] = useState(0);

  return (
    <AppContext.Provider
      value={{
        age,
        setAge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
