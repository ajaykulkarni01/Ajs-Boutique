import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
// import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Modal from "react-bootstrap/Modal";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Success!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Thank you for your purchase!</p>
        <p>You will now be redirected to the home page</p>
      </Modal.Body>

      {/* <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer> */}
    </Modal.Dialog>
  );
}

export default Success;
