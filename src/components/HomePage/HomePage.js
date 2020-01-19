import React from "react";
import ProductsService from "../../services/products.service";
import Product from "../Product";

const products = ProductsService.getProducts();

const desktopItems = products
  .filter(
    element => element.category === "desktop" && element.featured === true
  )
  .map(element => {
    return <Product element={element} />; //id?
  });

const tabletItems = products
  .filter(element => element.category === "tablet" && element.featured === true)
  .map(element => {
    return <Product element={element} />; //id??s
  });

const HomePage = () => (
  <div class="container">
    <h1 class="header-big">Welcome to our store</h1>
    <h2 class="header-small">Desktops</h2>
    <div class="products">{desktopItems}</div>
    <h2 class="header-small">Tablets</h2>
    <div class="products">{tabletItems}</div>
  </div>
);

export default HomePage;
