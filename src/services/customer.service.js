
import axios from 'axios';
import {GET_ALL_CUSTOMER_URL} from '../config';
async function getAllCustomers(payload) {
    return axios({
        method: 'GET',
        url: GET_ALL_CUSTOMER_URL,
        data: payload
      }).then(data => data.data);
}


export const customerService = {
    getAllCustomers,
}