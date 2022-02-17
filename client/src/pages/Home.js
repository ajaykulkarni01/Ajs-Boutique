import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import HomeCarousel from "../components/HomeCarousel";
import Cart from "../components/Cart";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
        <CategoryMenu />
        <ProductList />
        <Cart />
      </Container>
    </div>
  );
};

export default Home;
