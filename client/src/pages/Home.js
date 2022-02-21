import React from "react";
import ProductList from "../components/ProductList";
import HomeCarousel from "../components/HomeCarousel";
// import Cart from "../components/Cart";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
      <div className="titleBg mt-5 mb-5">
        <h2 className="home-product-title">New Arrivals</h2>
      </div>
        <ProductList /><br/><br/>
      </Container>
    </div>
  );
};

export default Home;
