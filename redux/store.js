import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducerPersonnne from './personne/reducerPersonne';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['data'],
};
const rootReducer = combineReducers({
  data: reducerPersonnne,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
