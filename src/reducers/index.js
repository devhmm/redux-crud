import { combineReducers } from 'redux';
import { customer } from './customer.reducer';

const rootReducer = combineReducers({
    customer
});

export default rootReducer;
