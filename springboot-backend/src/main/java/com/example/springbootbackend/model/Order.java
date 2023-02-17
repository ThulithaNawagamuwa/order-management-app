package com.example.springbootbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name  = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "unit_price")
    private long unitPrice;

    @Column(name = "total_cost")
    private long totalCost;

    @Column(name = "status")
    private String status;

    public Order(){

    }

    public Order(String itemName,
                 String shippingAddress,
                 int quantity,
                 long unitPrice,
                 long totalCost,
                 String status) {

        this.itemName = itemName;
        this.shippingAddress = shippingAddress;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.totalCost = totalCost;
        this.status = status;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(long unitPrice) {
        this.unitPrice = unitPrice;
    }

    public long getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(long totalCost) {
        this.totalCost = totalCost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
