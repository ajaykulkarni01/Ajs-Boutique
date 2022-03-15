import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// import Cart from '../components/Cart';
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        
        <div className="container-fluid mt-3">
          <br/><br/>
          <div className="row">
          
            <div className="col-md-12">
            
              <div className="row mb-3">
                <div className="col-md-5 text-center">
                  <img
                    src={`/images/${currentProduct.image}`}
                    alt={currentProduct.name}
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="col-md-7">
                  <h1 className="h5 d-inline mr-2">{currentProduct.name}</h1>

                  <div className="mb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning mr-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-secondary mr-1"
                    />
                    |{" "}
                    <span className="text-muted small">
                      42 ratings and 4 reviews
                    </span>
                  </div>
                  <dl className="row small mb-3">
                    <dt className="col-sm-3">Availability</dt>
                    <dd className="col-sm-9">In stock</dd>
                    <dt className="col-sm-3">Sold by</dt>
                    <dd className="col-sm-9">Authorised Store</dd>
                    <dt className="col-sm-3">Size</dt>
                    <dd className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizes"
                          disabled
                        />
                        <label className="form-check-label" htmlFor="sizes">
                          S
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizem"
                          disabled
                        />
                        <label className="form-check-label" htmlFor="sizem">
                          M
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizel"
                        />
                        <label className="form-check-label" htmlFor="sizel">
                          L
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizexl"
                        />
                        <label className="form-check-label" htmlFor="sizexl">
                          XL
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizexxl"
                        />
                        <label className="form-check-label" htmlFor="sizexxl">
                          XXL
                        </label>
                      </div>
                    </dd>
                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">
                      <button className="btn btn-sm btn-primary p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-secondary p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-success p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-danger p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-warning p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-info p-2 mx-1">
                        {" "}
                      </button>
                      <button className="btn btn-sm btn-dark p-2 mx-1">
                        {" "}
                      </button>
                    </dd>
                  </dl>

                  <div className="mb-3">
                    <span className="font-weight-bold h5 mr-2">
                      ${currentProduct.price}{" "}
                    </span>
                  </div>
                  <div className="mb-3 w-50">
                    <div className="d-inline float-left mr-2">
                      <div className="input-group input-group-sm mw-140">
                        <button
                          className="btn btn-primary text-white button-class"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="text"
                          className="form-control w-25"
                          defaultValue="1"
                        />
                        <button
                          className="btn btn-primary text-white button-class"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={addToCart}
                      type="button"
                      className="btn btn-sm btn-primary mr-2 my-2 button-class"
                      title="Add to cart"
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                    </button>
                    <button
                      disabled={!cart.find((p) => p._id === currentProduct._id)}
                      onClick={removeFromCart}
                      type="button"
                      className="btn btn-sm btn-warning mx-2 my-2"
                      title="Remove"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Remove from cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      title="Add to wishlist"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <div>
                    <dt className="font-weight-600 mb-2">
                      Product Description
                    </dt>
                    <p>{currentProduct.description}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {/* <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active"
                      id="nav-details-tab"
                      data-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                      Details
                    </a>
                    <a
                      className="nav-link"
                      id="nav-randr-tab"
                      data-toggle="tab"
                      href="#nav-randr"
                      role="tab"
                      aria-controls="nav-randr"
                      aria-selected="false"
                    >
                      Ratings & Reviews
                    </a>
                    <a
                      className="nav-link"
                      id="nav-faq-tab"
                      data-toggle="tab"
                      href="#nav-faq"
                      role="tab"
                      aria-controls="nav-faq"
                      aria-selected="false"
                    >
                      Questions and Answers
                    </a>
                    <a
                      className="nav-link"
                      id="nav-ship-returns-tab"
                      data-toggle="tab"
                      href="#nav-ship-returns"
                      role="tab"
                      aria-controls="nav-ship-returns"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </a>
                    <a
                      className="nav-link"
                      id="nav-size-chart-tab"
                      data-toggle="tab"
                      href="#nav-size-chart"
                      role="tab"
                      aria-controls="nav-size-chart"
                      aria-selected="false"
                    >
                      Size Chart
                    </a>
                  </div>
                </nav> */}
                  {/* <div className="tab-content p-3 small" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    <Details />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-randr"
                    role="tabpanel"
                    aria-labelledby="nav-randr-tab"
                  >
                    {Array.from({ length: 5 }, (_, key) => (
                      <RatingsReviews key={key} />
                    ))}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-faq"
                    role="tabpanel"
                    aria-labelledby="nav-faq-tab"
                  >
                    <dl>
                      {Array.from({ length: 5 }, (_, key) => (
                        <QuestionAnswer key={key} />
                      ))}
                    </dl>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-size-chart"
                    role="tabpanel"
                    aria-labelledby="nav-size-chart-tab"
                  >
                    <SizeChart />
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
            <CardFeaturedProduct data={data.products} />
            <CardServices />
          </div> */}
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {/* <Cart /> */}
      <br/><br/>
    </>
  );
}

export default Detail;
