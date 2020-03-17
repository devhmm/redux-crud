import React, { Component } from 'react'
import {connect} from 'react-redux';
import {customerActions} from './actions/customer.action';
const CustomerList = (props) => {
  const {customers } = props;
  return (
      <ul>
        {
          customers.length >  0 && 
          customers.map((data,index) => {
            return <li key={index}>{data.name}</li>
          })
        }
      </ul>
  );
 }
export class App extends Component {
  componentDidMount(){
    this.props.getAllCustomer();
  }
  render() {
    const {customers,loading} = this.props;
    return (
      <div>
        {
          loading ? 
          <p>Loading ...</p>
          :
          <CustomerList customers={customers} />
        }
        
      </div>
    )
  }
}

//Get State from store
function mapStateToProps(state){
return {
  customers: state.customer.customers,
  loading: state.customer.loading
}
}
 const mapDispatchToProps = dispatch => ({
    getAllCustomer(){
     dispatch(customerActions.getAllCustomer())
    }
 })
// dispatch actions
export default connect(mapStateToProps, mapDispatchToProps)(App);
