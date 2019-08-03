import { combineReducers } from 'redux';
import { GET_DATA_PRODUCT } from '../actions';

function ProductsReducer(state = { products: [] }, action) {
    switch (action.type) {
        case GET_DATA_PRODUCT:
            return { products: action.payload };
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    products: ProductsReducer
})

export default rootReducers;