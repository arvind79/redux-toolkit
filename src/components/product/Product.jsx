import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../../store/cartSlice";
import { getTheProducts } from "../../store/productsSlice";

const Product = () => {

  const dispatch = useDispatch();

  const {data: products} = useSelector(state => state.products)

  useEffect(() => {
    // getProducts();
    // dispatch an action for fetchTheProducts
    dispatch(getTheProducts());
  }, []);

  // const getProducts = () => {
  //   const fetchedProducts = await fetchProducts();
  //   dispatch an action for fetchTheProducts
  //   dispatch(getTheProducts());
  //   setProducts(fetchedProducts);
  // };

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" key={product.id} style={{ marginBottom: '10px'}}>
        <Card style={{ width: "18rem" }} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR. {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: 'white'}}>
            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
