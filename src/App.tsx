import React from 'react';

import {
  AppProvider,
  MainSection,
  NavigationBar,
  RootModal,
} from './components';

const App: React.FunctionComponent = () => {
  return (
    <AppProvider>
      <NavigationBar />
      <MainSection />
      <RootModal />
    </AppProvider>
  );
};

export default App;
