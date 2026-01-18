import { useParams } from "react-router-dom";
import useProducts from "../context/ProductsContext";
import useCardProducts from "../context/CardContext";
import useToast from "../context/ToastContext";


/////////////////////////////////////////////////
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Rating,
  Card,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/////////////////////////////////////////////////

export default function PruductDetails() {
  const { products_2 } = useProducts();
  const { productID } = useParams();

  const id = Number(productID);

  const product = products_2?.find(item => item.id === id);
console.log(product);

    const {cardList,dispatch } = useCardProducts()
    const {ShowToast} = useToast()


  const handleAddToCard = ()=>{
        ShowToast({massege:"Addition product to Card is Success"})

        dispatch({type:"ADD",payload:{product}})
        
    }

  if (!product) {
    return <h2>Loading product...</h2>;
  }

return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                height: 400,
                objectFit: "contain",
              }}
            />
          </Card>
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={6}>
          <Box>
            <Chip
              label={product.category}
              color="primary"
              sx={{ mb: 2 }}
            />

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {product.title}
            </Typography>

            <Typography variant="h6" color="success.main" sx={{ mb: 1 }}>
              ${product.price}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating
                value={product.rating.rate}
                precision={0.1}
                readOnly
              />
              <Typography sx={{ ml: 1 }}>
                ({product.rating.count} reviews)
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              {product.description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{ px: 4 }}
              onClick={handleAddToCard}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
