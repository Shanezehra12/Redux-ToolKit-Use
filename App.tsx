import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import MyStore from './src/reduxtoolkit/MyStore';

const App = () => {
  return (
    <Provider store={MyStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
