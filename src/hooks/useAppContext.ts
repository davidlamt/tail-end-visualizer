import { useContext } from 'react';

import { AppContext, AppContextValues } from '../components/AppProvider';

const useAppContext = (): AppContextValues => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error(
      'useAppContext must be used within an AppProvider consumer'
    );
  }

  return appContext;
};

export default useAppContext;
