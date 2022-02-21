import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import { Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { category } = useParams();
  // const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!category || category === "All") {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category.name === category
    );
  }
  const filteredProducts = filterProducts();
  console.log(filteredProducts);
  console.log(state.products);
  console.log(category);
  return (
    <div className="my-2">
      <div>
        <h2>{category}</h2>
      </div>

      {state.products.length ? (
          <Row xs={1} md={4} className="g-4">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </Row>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
