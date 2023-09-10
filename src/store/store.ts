import {
  applyMiddleware,
  compose,
  legacy_createStore,
} from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
].filter(Boolean);


const composeEnhancer =
  (window[
    // @ts-ignore
    "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
  ] as typeof compose) || compose;

const composedEnhancers = composeEnhancer(
  // @ts-ignore
  applyMiddleware(...middleWares),
);
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
