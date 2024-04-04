import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export default store;
export const persistor = persistStore(store);
