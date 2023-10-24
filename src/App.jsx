import React from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Navigations from './navigations';
import {theme} from './themes';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './store/store';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigations />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
