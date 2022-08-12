
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";



// Create function to display our Catalog of products fetched from our API
export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

// Fetch products from our API and set products inside our state
  useEffect(() => {
    fetch('http://localhost:5135/api/products')
      .then(response => response.json())
      .then(data => setProducts(data)) // method that changes the state and causes a rerender
  }, []) // Add empty array of dependencies to prevent rerendering so that this method will only be called once

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

