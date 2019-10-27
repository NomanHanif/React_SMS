import { createStore } from 'redux';

import { CounterReducer } from './Reducers/counterReducer';

let store = createStore(CounterReducer);


store.subscribe(() => {
    console.log("subscribe start")
    console.log(store.getState())
    console.log("subscribe end")
})

export default store;
