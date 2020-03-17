import {customerConstants} from '../constants/customer.constant';

const initialState = {
    customers : [],
    singleCustomer: {},
    loading: false
};

// Action
// type = Action Name
// payload = parameter to reducer

export function customer(state = initialState,action){

    switch (action.type) {
        case customerConstants.GET_CUSTOMER_LOADING:
        return {
            ...state,
            loading: true
        }
        case customerConstants.GET_CUSTOMER_SUCCESS:
        return {
            ...state,
            loading: false,
            customers: action.payload
        };
        case customerConstants.GET_CUSTOMER_FAIL:
        return {
            ...state,
            loading: false,
            customers: []
        };
        default: 
        return state;
    }


}