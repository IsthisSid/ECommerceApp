
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";



// Create function to display our Catalog of products fetched from our API
export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

// Fetch products from our API and set products inside our state
  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products))
  }, []) 
  // Add empty array of dependencies to prevent rerendering so that this method will only be called once

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

