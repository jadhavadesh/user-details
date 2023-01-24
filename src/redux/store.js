import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginUserReducer from './slices/loginSlice'
import userDetailsReducer from './slices/userDetailsSlice'
import snackbarReducer from './slices/snackbarSlice'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [
        'snackbar',
        'loginUserReducer',
        'userDetailsReducer'
    ],
}

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    loginUser: loginUserReducer,
    userDetail: userDetailsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true,
})

export const persistor = persistStore(store)
