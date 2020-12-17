// reducer: is a simple fn that receives state and action, 
// should return a new state

const cartProductReducer = (state = [], action) => {

    switch(action.type){
        case "ADD_PRODUCT":
            var copy =[...state]; //clone
            copy.push(action.payload);
            return copy;

            case "REMOVE_PRODUCT":
                //remove product from the car filtering by id
                return state.filter((pc) => pc.product.id !== action.payload.product.id);

    }

    return state;
};

export default cartProductReducer;