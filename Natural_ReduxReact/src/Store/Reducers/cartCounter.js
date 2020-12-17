// reducer: is a simple fn that receives state and action, 
// should return a new state

const cartCounterReducer = (state = 0, action) => {
    if(action.type === "Increase_Counter"){
        return state + 1; //increase the counter
    }
    return state;
};

export default cartCounterReducer;