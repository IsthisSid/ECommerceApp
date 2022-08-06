import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

// Store our list of products inside our function App(); make use of the products inside it as well using React hooks - useState
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from our API and set products inside our state
  useEffect(() => {
    fetch('http://localhost:5135/api/products')
      .then(response => response.json())
      .then(data => setProducts(data)) // method that changes the state and causes a rerender
  }, []) // Add empty array of dependencies to prevent rerendering so that this method will only be called once

  // Add an additional product to our list of products
  function addProduct() {
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return (
    <>
      <Typography variant="h1"> The Random Shop </Typography>
      <Catalog products={products} addProduct={addProduct} />

    </>
  );
}

export default App;
