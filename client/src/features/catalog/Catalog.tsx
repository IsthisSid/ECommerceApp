// <> are React components; we can remove this line below, but remember that <> replaces using <Fragment></Fragment>
import { Fragment } from "react";

import { Product } from "../../app/models/product";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

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
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - {product.price}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant='contained' onClick={addProduct}>Add Product</Button>
        </>
    )
}