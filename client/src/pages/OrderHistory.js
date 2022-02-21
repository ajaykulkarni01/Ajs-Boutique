import React from "react";
// import { Link } from 'react-router-dom';

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import { Container, Table, Row, Col } from "react-bootstrap";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <Container>
      <Row className="mt-5 mb-5">
        
        <Col>
        
      {user ? (
        <>
        <p> Hello, {user.firstName} {user.lastName}. Thank you for shopping with us. </p> 
        <h3>Order History</h3>
          {user.orders.map((order) => (
            <div key={order._id}>
              {order.products.map(
                ({ _id, image, name, price, description }, index) => (
                  <div key={index}>
                    
                    <Table responsive bordered >
                      <thead>
                        <tr>
                          <th>Order date</th>
                          <th>Product image</th>
                          <th>Product name</th>
                          <th>Product description</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {new Date(
                              parseInt(order.purchaseDate)
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            <img
                              className="orderHistoryimg"
                              alt={name}
                              src={`/images/${image}`}
                            />
                          </td>
                          <td>{name}</td>
                          <td>{description}</td>
                          <td>${price}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                )
              )}
            </div>
          ))}
        </>
      ) : null}
      </Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;
