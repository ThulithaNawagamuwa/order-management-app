
import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id).then( res => {
            this.setState({order: res.data});
        })
    }

    back(){
        this.props.history.push("/orders");    
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 style= {{marginTop: "10px" ,marginBottom: "-10px" }}  className = "text-center"> View Order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Order item: { this.state.order.itemName }</label>
                        </div>

                        <div style= {{marginTop: "10px"}}  className = "row">
                            <label> Quantity: { this.state.order.quantity }</label>
                        </div>

                        <div style= {{marginTop: "10px"}}  className = "row">
                            <label> Unit Price: { "Rs. " + this.state.order.unitPrice }</label>
                        </div>

                        <div style= {{marginTop: "10px"}} className = "row">
                            <label> Total Price: { "Rs. " + this.state.order.totalCost } </label>
                        </div>

                        <div style= {{marginTop: "10px"}} className = "row">
                            <label> Shipping Address: { this.state.order.shippingAddress }</label>
                        </div>
                        <button style= {{marginTop: "15px"}} className="btn btn-info" onClick={this.back.bind(this)} >Back</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent
