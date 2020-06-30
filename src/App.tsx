import React from 'react';

import { MainSection, NavigationBar } from './components';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <NavigationBar />
      <MainSection />
    </div>
  );
};

export default App;
