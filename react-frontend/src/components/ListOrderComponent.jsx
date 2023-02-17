import React, { Component } from 'react'
import OrderService from '../services/OrderService'


class ListOrderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            orders: []    
        }

        this.addOrder = this.addOrder.bind(this);   
        this.editOrder = this.editOrder.bind(this); 
        this.deleteOrder =  this.deleteOrder.bind(this);
    }

    deleteOrder(id){
        OrderService.deleteOrder(id).then( res =>{
            this.setState({orders: this.state.orders.filter(order => order.id !== id)});
        }); 
    }

    viewOrder(id){
        this.props.history.push(`/view-order/${id}`); 
    }


    editOrder(id){
        this.props.history.push(`/place-an-order/${id}`);  
    }

    componentDidMount(){
        OrderService.getOrders().then((res)=>{
            this.setState({orders: res.data});     
        });                                         
    }


    addOrder(){
        this.props.history.push("/place-an-order/_add");       
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Orders List</h2> 
                <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='row'>
                    <button style= {{ marginLeft: "auto" }} className="btn btn-primary" onClick={this.addOrder}> Order</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered" >

                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Shipping Address</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total cost</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.orders.map(
                                    order =>

                                    <tr key = {order.orderId}>  
                                        <td>{order.itemName}</td>
                                        <td>{order.shippingAddress}</td>
                                        <td>{order.quantity}</td>
                                        <td>{"Rs. " + order.unitPrice}</td>
                                        <td>{"Rs. " + order.totalCost}</td>
                                        <td >
                                            <button onClick={ () => this.editOrder(order.orderId)} className="btn btn-primary">Update</button>
                                            <button style= {{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.orderId)} className="btn btn-danger">Remove</button>  
                                            <button style= {{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.orderId)} className="btn btn-info">View</button> 
                                        </td>
                                        

                                    </tr>
                                )
                            }

                        </tbody>
                        
                    </table>
                </div>

            </div>
        )
    }
}

export default ListOrderComponent
