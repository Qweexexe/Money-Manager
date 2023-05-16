import {createStore,combineReducers} from "redux";
import {reducer} from "./MainMoneyReducer";
import {PercentReducer} from "./Percents";
import {ShowReducer} from "./ShowReducer";

const combinedReducers = combineReducers({
    money : reducer,
    perc : PercentReducer,
    show : ShowReducer

}
)
export const store = createStore(combinedReducers)
