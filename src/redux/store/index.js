import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import thunk from 'redux-thunk';
import { reducer } from '../reducers';

const encryptor = encryptTransform({
  secretKey: "Password",
  onError: (error) => {
    if (__DEV__) console.log("[ EncryptTransform persistReducer] Error", error)
  },
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor]
};

const pReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk);

const store = createStore(
  pReducer,
  composeWithDevTools(middleware)
);

const persistor = persistStore(store);

export { store, persistor };
