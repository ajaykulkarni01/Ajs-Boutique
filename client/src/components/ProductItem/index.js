import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import { Col, Button, Card } from 'react-bootstrap';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
   
    <Col>
      <Card>
      <Link to={`/detail/${_id}`}>
            <img className="card-img-top"
              alt={name}
              src={`/images/${image}`}
            />
          </Link>
        {/* <Card.Img variant="top" src={`/images/${image}`} /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {quantity} {pluralize("item", quantity)} in stock
            <b> ${price}</b>
          </Card.Text>
        </Card.Body>
        
        <Card.Footer>
          <Button className="button-class" onClick={addToCart}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </Col>
     
  );
}

export default ProductItem;
