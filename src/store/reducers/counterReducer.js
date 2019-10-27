


const initialState = {
    count : 0
}


const CounterReducer = (state=initialState,action)=> {

    switch (action.type) {
        case 'increament': {
            return {
                ...state,
                count : state.count + action.payload
            }
        }
        break;

        case 'decreament': {
            return {
                ...state,
                count : state.count - action.payload
            }
        }
        break;
    
        default:
            break;
    }


}

export {CounterReducer}