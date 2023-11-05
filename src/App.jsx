import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Navigations from './navigations';
import store from './store/store';
import {theme} from './themes';

let persistor = persistStore(store);

const App = () => {
  // useEffect(() => {
  //   Mapbox.setConnected(true);
  //   Mapbox.setAccessToken(MAP_BOX_API);
  //   Mapbox.setTelemetryEnabled(false);
  // });
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
