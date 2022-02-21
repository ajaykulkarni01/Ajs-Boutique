// import React, { useState } from "react";
// import { useStoreContext } from "../utils/GlobalState";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import { useParams } from "react-router-dom";
// import HomeCarousel from "../components/HomeCarousel";
// import Cart from "../components/Cart";
import { Container } from "react-bootstrap";
// import { UPDATE_CURRENT_CATEGORY } from "../utils/actions";

const Men = () => {
  // const [state] = useStoreContext();
  // const { category } = useParams();
  // const { products } = state;
  // const [products, setProducts ] = useState(...state.products);
  // // const [setCurrentProduct ] = useState({});
  // if (state.products.length) {
  //   setProducts(
  //     state.products.find(
  //       (product) => product.category.name === category
  //     )
  //   );
  // }
  return (
    <div>
      <Container>
        {/* <CategoryMenu /> */}
        <ProductList />
      </Container>
    </div>
  );
};

export default Men;
