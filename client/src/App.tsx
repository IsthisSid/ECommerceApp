import { useEffect, useState } from "react";

// Store our list of products inside our function App(); make use of the products inside it as well using React hooks - useState
function App() {
  const [products, setProducts] = useState([  
    {name: "product1", price: 100.00},
    {name: "product2", price: 200.00},
  ]);

// Fetch products from our API and set products inside our state
  useEffect(() => {
    fetch('http://localhost:5135/api/products')
      .then(response => response.json())
      .then(data => setProducts(data)) // method that changes the state and causes a rerender
  }, []) // Add empty array of dependenciecs to prevent rerendering so that this method will only be called once

// Add an additional product to our list of products
function addProduct() {
  setProducts(prevState => [...prevState, 
    {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
}

  return (
    <div>
      <h1> The Random Shop </h1>
    <ul>
      {products.map((item, index )=> (
        <li key={item.name}>{item.name} - {item.price}</li>
      ))}
    </ul>
    <button onClick={addProduct}>Add Product</button>
    </div>
    );
}

export default App;
