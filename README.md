# SE-Assignment
Order Management App

**Frontend-side tools and technologies used**

    •	React

    •	Modern Javascript(ES6)

    •	NodeJS and NPM

    •	VS Code IDE

    •	Create React App CLI

    •	Axios HTTP Library



**Server-side Technologies used**

    •	Spring Boot

    •	SpringData JPA

    •	Maven 3.2+

    •	JDK 1.8

    •	Embeded Tomcat 8.5+

    •	MySQL Database
    


**Demo**

![Order Management App](https://user-images.githubusercontent.com/84464963/219533804-a6078455-bb88-4360-bc37-ff13a2f142f0.gif)


**Implemented Architecture**

Following diagram shows the implemented architecture. By using this application we can place orders, update orders and delete them if required.

![Implemented Architecture](https://user-images.githubusercontent.com/84464963/219534949-c6352905-fcee-420f-b4e2-65ba754fd523.PNG)



**Proposed Microservice Architecture**

![Proposed Microservice Architecture](https://user-images.githubusercontent.com/84464963/219535017-34b5e4f5-1e07-4926-82ae-ee7e9c9beaed.PNG)

**Proposed ERD**
![ERD - Order Management System](https://user-images.githubusercontent.com/84464963/219979717-808f9680-26da-4c5a-b183-f3ab90c9d49e.png)



**Proposed DDL**

CREATE TABLE `Customer` (
  `Customer_ID` int,
  `FirstName` varchar(50),
  `LastName` varchar(50),
  `Address` varchar(50),
  `Phone` varchar(10),
  PRIMARY KEY (`Customer_ID`)
);

CREATE TABLE `Order` (
  `Order_ID` int,
  `Customer_ID` int,
  `Customer_name ` varchar(50),
  `Shipping_address` varchar(50),
  `Shipping_date` datetime,
  `Product_ID` int,
  `Quantity` int,
  `Total_cost` int,
  `Status` varchar(50),
  PRIMARY KEY (`Order_ID`),
  FOREIGN KEY (`Customer_ID`) REFERENCES `Customer`(`Customer_ID`)
);

CREATE TABLE `Product` (
  `Product_ID` int,
  `Product_name` varchar(50),
  `Product_type` varchar(50),
  `Price` int,
  PRIMARY KEY (`Product_ID`)
);


\
\


**Proposed Design Diagram**
![Design Diagram - Order Management System](https://user-images.githubusercontent.com/84464963/219985225-260d581f-6449-41cf-ac1a-33240759b5ab.png)



