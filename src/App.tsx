import React from 'react';

import { AppProvider, MainSection, NavigationBar } from './components';

const App: React.FunctionComponent = () => {
  return (
    <AppProvider>
      <NavigationBar />
      <MainSection />
    </AppProvider>
  );
};

export default App;
