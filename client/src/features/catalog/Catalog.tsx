
import { Product } from "../../app/models/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";

// Create interface inside our component and call it Props. 
interface Props {
    products: Product[];
    addProduct: () => void;
}

// Create function to display our Catalog of products fetched from our API
// Create button with onClick that allows user to add a product
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ProductList products={products} />
            <Button variant='contained' onClick={addProduct}>Add Product</Button>
        </>
    )
}

/* Notes: 
    - <> are React components; replaces using <Fragment></Fragment>
    - Inside interface Props, we specify the types of things that we're passing down and can expect to receive 
    inside our parameter for this react component (examples: list of products and addProduct).
    - We will be using these a lot in our app.
*/