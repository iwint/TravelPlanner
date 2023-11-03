import Mapbox from '@rnmapbox/maps';
import React, {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Navigations from './navigations';
import store from './store/store';
import {theme} from './themes';
import {MAP_BOX_API} from '../secrets';

let persistor = persistStore(store);

const App = () => {
  Mapbox.setAccessToken(MAP_BOX_API);
  Mapbox.setConnected(true);
  useEffect(() => {
    Mapbox.setTelemetryEnabled(false);
  });
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
