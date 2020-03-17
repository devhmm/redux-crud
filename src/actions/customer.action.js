import {customerService} from '../services/customer.service';
import {customerConstants} from '../constants/customer.constant';
function getAllCustomer(data) {
    function successful(payload) {
      return { type: customerConstants.GET_CUSTOMER_SUCCESS, payload:payload };
    }
    function failure(error) {
      return { type: customerConstants.GET_CUSTOMER_FAIL, error };
    }
    return (dispatch) => {
      customerService.getAllCustomers(data)
        .then(
          (payload) => {
            if(payload.success){
                dispatch(successful(payload.data));
            }
            else{
                dispatch(failure([]));
            }
          },
          error => dispatch(failure(error)),
        );
    };
  }
  export const customerActions = {
    getAllCustomer
  }