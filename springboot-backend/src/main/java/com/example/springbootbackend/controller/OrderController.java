package com.example.springbootbackend.controller;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Order;
import com.example.springbootbackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    //get all orders
    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    //create order rest api
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order){
        return orderRepository.save(order);
    }

    //get Order by ID
    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        Order order = orderRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Order not exist with id :" + id));
        return ResponseEntity.ok(order);  //This pass HTTP OK response with the order in its body.

    }

    // update orders rest api
    @PutMapping("/orders/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails){
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));

        order.setItemName(orderDetails.getItemName());
        order.setQuantity(orderDetails.getQuantity());
        order.setUnitPrice(orderDetails.getUnitPrice());
        order.setShippingAddress(orderDetails.getShippingAddress());
        order.setTotalCost(orderDetails.getTotalCost());

        Order updatedEmployee = orderRepository.save(order);
        return ResponseEntity.ok(updatedEmployee);
    }

    // delete order rest api
    	@DeleteMapping("/orders/{id}")
    	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id){
    		Order order = orderRepository.findById(id)
  			        .orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));

        orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}