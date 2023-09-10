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

const loggerMiddleware: any =
  (store: any) => (next: any) => (action: any) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("currentState", store.getState());

    next(action);

    console.log("next state:", store.getState());
  };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleWares),
);
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
