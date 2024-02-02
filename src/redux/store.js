import {createStore,combineReducers,applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import XodimlarReducer from "./reducers/xodimlarReducer";
import LavozimReducer from "./reducers/lavozimReducer";
import DarajaReducer from "./reducers/darajaReducer";
export const store = createStore(combineReducers({
    XodimlarReducer,
    LavozimReducer,
    DarajaReducer,
    }),
    applyMiddleware(logger))