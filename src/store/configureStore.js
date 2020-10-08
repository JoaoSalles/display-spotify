import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'
import mySaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  let store = createStore(
    persistedReducer, 
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(mySaga);
  return { store, persistor }
}