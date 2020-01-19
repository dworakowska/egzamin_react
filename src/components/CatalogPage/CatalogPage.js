import React, { useState, useHistory } from "react";
import Product from "../Product";
import Filter from "../Filter";
import ProductsService from "../../services/products.service";

const allProducts = ProductsService.getProducts();

const CatalogPage = () => {
  // get, set (pobieranie, przypisywanie)
  const [products, setProducts] = useState(allProducts);

  const onChange = value => {
    setProducts(
      allProducts.filter(element => {
        return element.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const onSelectionChange = value => {
    setProducts(
      allProducts.filter(element => {
        return element.manufacture.includes(value);
      })
    );
  };

  const onClear = () => {
    setProducts(allProducts);
  };

  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>

      <div className="catalog">
        <div className="column-left">
          {
            <Filter
              onChange={onChange}
              onClear={onClear}
              products={allProducts}
              onSelectionChange={onSelectionChange}
            />
          }
        </div>

        <div className="column-right">
          <div className="products">
            {products.map(element => {
              return <Product element={element} key={element.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
