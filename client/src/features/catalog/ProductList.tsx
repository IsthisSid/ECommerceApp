import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4}>
                    <ProductCard key={product.id} product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

/* Notes: 
    - <> are React components; replaces using <Fragment></Fragment>
    - Inside interface Props, we specify the types of things that we're passing down and can expect to receive 
    inside our parameter for this react component (examples: list of products and addProduct).
    - We will be using these a lot in our app.
*/