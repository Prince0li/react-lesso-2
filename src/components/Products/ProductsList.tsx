import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import ProductsArray from 'utils/productsArray'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of Products
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
            >
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={product.title}
                            description={product.description}
                            capacity={product.capacity}
                            type={product.type}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
