import {
  applyMiddleware,
  compose,
  legacy_createStore,
} from "redux";
import { rootReducer } from "./root-reducer";

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

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleWares),
);
export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);

export type RootState = ReturnType<typeof store.getState>;
