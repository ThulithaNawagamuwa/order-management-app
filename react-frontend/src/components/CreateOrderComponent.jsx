import React, { Component } from 'react'
import OrderService from '../services/OrderService';

export default class CreateOrderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id, 
            itemName: '',
            quantity: '',
            unitPrice: '',
            totalCost: '',
            shippingAddress: ''
        }

        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);  
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);  
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);  
        this.changeShippingAddressHandler = this.changeShippingAddressHandler.bind(this);  
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);

    }


    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            OrderService.getOrderById(this.state.id).then((res)=>{
                let order =  res.data;   
                console.log(order)                
                this.setState({                            
                    itemName: order.itemName,
                    quantity: order.quantity,
                    unitPrice: order.unitPrice,
                    totalCost: order.totalCost,
                    shippingAddress: order.shippingAddress
                });       
            }); 
        }                                         
    }


    saveOrUpdateOrder = (e) =>{
        e.preventDefault();
        let order = {
            itemName: this.state.itemName, 
            quantity: this.state.quantity, 
            unitPrice: this.state.unitPrice, 
            shippingAddress: this.state.shippingAddress,
            totalCost: this.state.unitPrice * this.state.quantity
        };
        console.log('order => ' + JSON.stringify(order));
        

        if(this.state.id === '_add'){
            OrderService.createOrder(order).then(res=>{
                this.props.history.push("/orders"); 
            });
        }else{
            OrderService.updateOrder(order, this.state.id).then(res=>{
                this.props.history.push("/orders"); 
            });
        }
    }


    changeItemNameHandler= (event) => {
        this.setState({itemName: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeUnitPriceHandler= (event) => {
        this.setState({unitPrice: event.target.value});
    }

    changeShippingAddressHandler= (event) => {
        this.setState({shippingAddress: event.target.value});
    }

    cancel(){
        this.props.history.push("/orders");    
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 style= {{marginTop: "20px"}} className='text-center'> Place an Order</h3>
        }else{
            return <h3 style= {{marginTop: "20px"}} className='text-center'> Update Order</h3>
        }
    }

    render() {
        return (
            <div>
                    <div className='container'>
                        <div className='row'>
                            <div style= {{marginTop: "20px"}} className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div style= {{marginTop: "-25px"}} className = "card-body">
                                    <form>

                                        <div style= {{marginTop: "10px"}} className = "form-group">
                                        <label> Item Name: </label>
                                            <input placeholder="Item Name" name="itemName" className="form-control" 
                                                value={this.state.itemName} onChange={this.changeItemNameHandler}/>
                                        </div>


                                        <div style= {{marginTop: "10px"}} className = "form-group">
                                        <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>


                                        <div style= {{marginTop: "10px"}} className = "form-group">
                                        <label> Unit Price (Rs.) : </label>
                                            <input placeholder="Unit Price" name="unitPrice" className="form-control" 
                                                value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}/>
                                        </div>


                                        <div style= {{marginTop: "10px"}} className = "form-group">
                                        <label> Shipping Address: </label>
                                            <input placeholder="Shipping Address" name="shippingAddress" className="form-control" 
                                                value={this.state.shippingAddress} onChange={this.changeShippingAddressHandler}/>
                                        </div >

                                        <div>

                                        <button style= {{marginTop: "15px"}} className="btn btn-success" onClick={this.saveOrUpdateOrder}>Save</button>
                                        <button style= {{marginTop: "15px", marginLeft: "10px"}} className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }


}

