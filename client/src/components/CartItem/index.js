import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import { Table, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Container>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Product image</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={`/images/${item.image}`} alt="" />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  placeholder="1"
                  value={item.purchaseQuantity}
                  onChange={onChange}
                />
              </td>
              <td>
                <span
                  role="img"
                  aria-label="trash"
                  onClick={() => removeFromCart(item)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faTrashCan} />{" "}
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CartItem;
