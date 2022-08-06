import { Product } from "../../app/models/product";

// <> are React components; we can remove this line below, but remember that <> replaces using <Fragment></Fragment>
import { Fragment } from "react";

// Create interface inside our component and call it Props. 
// Inside here, we specify the types of things that we're passing down and can expect to receive 
// inside our parameter for this react component (examples: list of products and addProduct).
interface Props {
    products: Product[];
    addProduct: () => void;
}

// Create function to display our Catalog of products fetched from our API
// Create button with onClick that allows user to add a product
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add Product</button>
        </>
    )
}