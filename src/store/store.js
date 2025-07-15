import { compose, applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
