"use strict"
import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/index';
import AppNavigator from './views/navigation/AppNavigator';
import SplashScreen from './views/Screens/SplashScreen';

export default function App() {
  const [isSetup, setisSetup] = useState(false)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar backgroundColor="#161616" />
        {isSetup ? <AppNavigator /> : <SplashScreen setisSetup={setisSetup} />}
      </PersistGate>
    </Provider>
  )
}
