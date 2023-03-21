import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../../utils/local-storage-utils";

export type IGlobalState = ReturnType<typeof reducers>

const reducers= combineReducers({
    counter: counterReducer
})


export const store = createStore(reducers,loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});