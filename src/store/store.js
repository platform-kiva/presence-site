import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
// import { loggerMiddleWare } from './middleware/logger';
import { logger } from 'redux-logger';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// root reducer
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleWares.push(logger);
}

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares
});

export const persistor = persistStore(store);